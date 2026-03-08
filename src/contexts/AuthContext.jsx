import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password, name, role) => {
    if (!auth) throw new Error("Firebase is not configured. Please set up your .env file with Firebase credentials.");
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName: name });
    localStorage.setItem(`role_${result.user.uid}`, role);
    setUserRole(role);
    return result;
  };

  const login = async (email, password, role) => {
    if (!auth) throw new Error("Firebase is not configured. Please set up your .env file with Firebase credentials.");
    const result = await signInWithEmailAndPassword(auth, email, password);
    const storedRole = localStorage.getItem(`role_${result.user.uid}`);
    if (storedRole && storedRole !== role) {
      await signOut(auth);
      throw new Error(`This account is registered as ${storedRole}. Please use the correct login.`);
    }
    if (!storedRole) {
      localStorage.setItem(`role_${result.user.uid}`, role);
    }
    setUserRole(role);
    return result;
  };

  const logout = async () => {
    setUserRole(null);
    if (auth) return signOut(auth);
  };

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        const role = localStorage.getItem(`role_${user.uid}`);
        setUserRole(role);
      } else {
        setUserRole(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, userRole, signup, login, logout, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
