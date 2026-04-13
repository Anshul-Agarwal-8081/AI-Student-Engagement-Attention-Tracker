import { db } from "./firebase"; 
import { doc, setDoc } from "firebase/firestore"; 

export const uploadTestData = async () => {
  const studentData = {
    id: 'S102',
    name: 'Priya Patel',
    participation: 92,
    quizScore: 88,
    sentiment: 'Positive',
    engagementScore: 90,
    category: 'High',
    atRisk: false,
    weeklyHistory: [85, 88, 91, 90],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [{ date: '2023-10-15', text: 'Excellent participation in group work.' }]
  };

  try {
    // Check if config is placeholder
    if (db.app.options.apiKey === "YOUR_API_KEY") {
      throw new Error("Firebase not configured. Please update src/functionalities/firebase.js with your API keys.");
    }

    // "students" is the collection, "S102" is the document ID
    await setDoc(doc(db, "students", studentData.id), studentData);
    console.log("Data uploaded successfully!");
    return { success: true, message: "Priya Patel (S102) uploaded to Firestore!" };
  } catch (error) {
    console.error("Error uploading data: ", error);
    return { success: false, message: error.message };
  }
};
