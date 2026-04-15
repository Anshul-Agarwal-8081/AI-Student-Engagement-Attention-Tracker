import Papa from "papaparse";
import { collection, doc, getDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore";
import { db } from "./firebase";

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1yt5qnYX_tb9_rs1gme5tWMLgHF-ZXECCyDc4WpZtzQY/export?format=csv&gid=1972102221";

const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;

async function queryAI(doubt, resolved, interest, engageRating, feedback) {
  try {
    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          max_tokens: 100,
          temperature: 0,
          top_p: 1,
          messages: [
            {
              role: "user",
              content: `Calculate Engagement Quotient (EQ out of 10).

Steps:
1. Convert:
- Doubt: No=0, Yes = 1
- Resolved = (score × 2)
- Interest = (score × 2)
- Engagement = as is
- Feedback = score 0–5 → multiply by 2

2. Weights:
EQ = 
(Doubt × 1.5) +
(Resolved × 2.0) +
(Interest × 2.0) +
(Engagement × 3.0) +
(Feedback × 1.5)

3. Round to 1 decimal.

4. Output:
XX.X

Input:
${doubt},${resolved},${interest},${engageRating},${feedback}
Note : Just respond with EQ i want a one liner answer
example : 66.8
`,
            },
          ],
          model: "mistralai/Mistral-7B-Instruct-v0.2:featherless-ai",
        }),
      }
    );
    const result = await response.json();
    return result.choices[0].message.content.trim();
  } catch (err) {
    console.error("AI Query failed", err);
    return "50.0"; // fallback
  }
}

export const syncGoogleSheets = async () => {
  try {
    const response = await fetch(SHEET_CSV_URL);
    const csvText = await response.text();
    const parsedData = Papa.parse(csvText, { header: true, skipEmptyLines: true });
    
    const metaRef = doc(db, "system", "syncMeta");
    const metaSnap = await getDoc(metaRef);
    const lastSyncTime = metaSnap.exists() ? metaSnap.data().lastSyncTime : new Date(0).toISOString();
    
    let processedAny = false;
    let latestTimestamp = lastSyncTime;

    for (let row of parsedData.data) {
       const timestamp = row["Timestamp"];
       if (!timestamp || new Date(timestamp) <= new Date(lastSyncTime)) continue;
       
       const urn = row["URN NO"]?.trim();
       if (!urn) continue;

       // Extra data from sheet
       const doubt = row["Did you ask any doubts in class?"] || "No";
       const resolved = row["Did your doubts get resolved properly ?"] || "3";
       const interest = row["How interested are you in attending the class?"] || "3";
       const engageRating = row["On the scale out of 1 to 10 how engaged are you in this subject"] || "5";
       const feedbackText = row["Student's feedback"] || "No feedback";

       // Call AI for EQ
       const eqString = await queryAI(doubt, resolved, interest, engageRating, feedbackText);
       const eqValue = parseFloat(eqString) || 0;

       // Derived metrics
       let sentiment = "Neutral";
       let category = "Medium";
       let atRisk = false;

       if (eqValue >= 80) {
           sentiment = "Positive";
           category = "High";
       } else if (eqValue < 50) {
           sentiment = "Negative";
           category = "Low";
           atRisk = true;
       }

       const studentRef = doc(db, "students", urn);
       const studentSnap = await getDoc(studentRef);
       
       if (studentSnap.exists()) {
           const studentData = studentSnap.data();
           const newParticipation = (studentData.participation || 0) + 1;
           const currentQuizScore = studentData.quizScore || 0;
           const newQuizScore = (currentQuizScore + parseFloat(engageRating)) / 2;
           
           await updateDoc(studentRef, {
               participation: newParticipation,
               quizScore: newQuizScore,
               engagementScore: eqValue,
               sentiment: sentiment,
               category: category,
               atRisk: atRisk,
               sentimentHistory: arrayUnion(sentiment),
               weeklyHistory: arrayUnion(eqValue),
               latestFeedback: feedbackText
           });
       } else {
           await setDoc(studentRef, {
               id: urn,
               name: row["NAME"] || "Unknown",
               participation: 1,
               quizScore: parseFloat(engageRating) / 2,
               engagementScore: eqValue,
               sentiment: sentiment,
               category: category,
               atRisk: atRisk,
               sentimentHistory: [sentiment],
               weeklyHistory: [eqValue],
               latestFeedback: feedbackText
           }, { merge: true });
       }
       
       processedAny = true;
       if (new Date(timestamp) > new Date(latestTimestamp)) {
           latestTimestamp = timestamp;
       }
    }
    
    if (processedAny) {
        await setDoc(metaRef, { lastSyncTime: latestTimestamp }, { merge: true });
        console.log("Synced new Google Sheet records to Firebase.");
    }

  } catch (error) {
     console.error("Failed to sync from Google Sheets", error);
  }
};
