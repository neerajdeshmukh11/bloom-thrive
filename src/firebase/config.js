import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDiu9a4RPK88tHLlqQZwM4A0w_jmijkvM",
  authDomain: "kilkaari-e97a8.firebaseapp.com",
  projectId: "kilkaari-e97a8",
  storageBucket: "kilkaari-e97a8.firebasestorage.app",
  messagingSenderId: "521351279966",
  appId: "1:521351279966:web:5e215dd398abe145984bcf",
  measurementId: "G-FXND8E68L0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
