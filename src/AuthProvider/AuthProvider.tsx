import React from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as logOut,
} from "../firebase/firebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";
import { localStorageKeys } from "../constants/localstorageKeys";

interface AuthContextType {
  user: any;
  signin: (email: string, password: string) => void;
  isLoading: boolean;
  error: any;
  signOut: () => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = getAuth();

  const [user, setUser] = React.useState<any>(
    JSON.parse(localStorage.getItem(localStorageKeys.user)!) || null
  );
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";

  const signin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem(
        localStorageKeys.user,
        JSON.stringify(userCredential)
      );
      setUser(userCredential);
      setIsLoading(false);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem(localStorageKeys.user);
    logOut(auth);
    setUser(null);
  };

  let value = { user, signin, isLoading, error, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
