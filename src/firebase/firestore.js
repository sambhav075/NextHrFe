// firestore.js
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export const addEmployee = async (formData) => {
  if (!db) {
    throw new Error('Firestore not initialized');
  }

  try {
    // Add employee's personal details
    const employeeRef = await addDoc(collection(db, "employees"), {
      name: formData.name,
      employeeId: formData.employeeId,
      email: formData.email,
      phone: formData.phone,
      age: formData.age,
      gender: formData.gender,
      address: {
        street: formData.street,
        area: formData.area,
        district: formData.district,
        state: formData.state,
      },
      family: {
        motherName: formData.motherName,
        fatherName: formData.fatherName,
      },
      createdAt: new Date().toISOString(),
    });

    // Add education details as subcollection
    for (const edu of formData.education) {
      await addDoc(collection(employeeRef, "education"), edu);
    }

    // Add experience details as subcollection
    for (const exp of formData.experiences) {
      await addDoc(collection(employeeRef, "experiences"), exp);
    }

    return employeeRef.id;
  } catch (error) {
    console.error("Error in addEmployee:", error);
    throw error;
  }
};

export default db;
