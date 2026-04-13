import { collection, getDocs, doc, getDoc, setDoc, query, orderBy } from "firebase/firestore";
import { db } from "../functionalities/firebase";

/**
 * Fetches all student records from Firestore.
 */
export const getStudents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "students"));
    const students = [];
    querySnapshot.forEach((doc) => {
      students.push({ id: doc.id, ...doc.data() });
    });
    return students;
  } catch (error) {
    console.error("Error fetching students: ", error);
    return [];
  }
};

/**
 * Fetches a single student record by ID.
 */
export const getStudentById = async (studentId) => {
  try {
    const docRef = doc(db, "students", studentId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such student!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching student details: ", error);
    return null;
  }
};

/**
 * Fetches class average trends.
 */
export const getClassAverageTrends = async () => {
  try {
    const querySnapshot = await getDocs(query(collection(db, "classTrends"), orderBy("week", "asc")));
    const trends = [];
    querySnapshot.forEach((doc) => {
      trends.push({ id: doc.id, ...doc.data() });
    });
    return trends;
  } catch (error) {
    console.error("Error fetching trends: ", error);
    return [];
  }
};

/**
 * Fetches sentiment distribution.
 */
export const getSentimentDistribution = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "sentimentInfo"));
    const distribution = [];
    querySnapshot.forEach((doc) => {
      distribution.push({ id: doc.id, ...doc.data() });
    });
    return distribution;
  } catch (error) {
    console.error("Error fetching sentiment distribution: ", error);
    return [];
  }
};

/**
 * Fetches category distribution.
 */
export const getCategoryDistribution = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "categoryInfo"));
    const distribution = [];
    querySnapshot.forEach((doc) => {
      distribution.push({ id: doc.id, ...doc.data() });
    });
    return distribution;
  } catch (error) {
    console.error("Error fetching category distribution: ", error);
    return [];
  }
};

/**
 * Utility to seed the database with initial mock data.
 */
export const seedDatabase = async (mockData) => {
  const { mockStudents, classAverageTrends, sentimentDistribution, categoryDistribution } = mockData;

  try {
    // Seed Students
    for (const student of mockStudents) {
      const { id, ...data } = student;
      await setDoc(doc(db, "students", id), data);
    }

    // Seed Class Trends
    for (const trend of classAverageTrends) {
      await setDoc(doc(db, "classTrends", trend.week), trend);
    }

    // Seed Sentiment
    for (const item of sentimentDistribution) {
      await setDoc(doc(db, "sentimentInfo", item.name), item);
    }

    // Seed Categories
    for (const item of categoryDistribution) {
      await setDoc(doc(db, "categoryInfo", item.name), item);
    }

    console.log("Database seeded successfully!");
    return true;
  } catch (error) {
    console.error("Error seeding database: ", error);
    return false;
  }
};
