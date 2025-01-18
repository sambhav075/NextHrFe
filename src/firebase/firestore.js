// firestore.js
import { getFirestore, collection, addDoc } from "firebase/firestore";
import  {app} from "./firebase";

const db = getFirestore(app);

export const addUser = async (name, email, age, gender) => {
  if (!db) {
    throw new Error('Firestore not initialized');
  }

  try {
    const usersRef = collection(db, "users");
    const docRef = await addDoc(usersRef, {
      name,
      email,
      age,
      gender,
      createdAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error in addUser:", error);
    throw error;
  }
};

export default db;