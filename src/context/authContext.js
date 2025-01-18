"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from 'next/navigation';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
   const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const initializeUser = useCallback((user) => {
    if (user) {
      setCurrentUser(user);
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!auth) {
      console.error("Firebase auth is not initialized properly!");
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, initializeUser, (error) => {
      console.error("Error with onAuthStateChanged:", error);
    });

    return () => unsubscribe();
  }, [initializeUser]);

  // Register a new user with email and password
  const registerWithEmailAndPassword = async (email, password) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      console.log("User registered successfully:", user);
      setCurrentUser(user);
      setUserLoggedIn(true);
      setError(null);
    } catch (err) {
      console.error("Error during registration:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Login with email and password
  const loginWithEmailAndPassword = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      console.log("User logged in successfully:", user);
      setCurrentUser(user);
      router.push("/");
      setUserLoggedIn(true);
      setError(null);
    } catch (err) {
      console.error("Error during login:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Login with Google
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google login successful:", user);
      setCurrentUser(user);
      setUserLoggedIn(true);
      setError(null);
    } catch (err) {
      console.error("Error during Google login:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setCurrentUser(null);
      setUserLoggedIn(false);
      setError(null);
    } catch (err) {
      console.error("Error during logout:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentUser,
    userLoggedIn,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    loginWithGoogle,
    logout,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
