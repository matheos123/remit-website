"use client"; //for hooks
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/firebaseConfig";
import {
  User,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

interface AuthContextType {
  currentUser: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  const locale = useLocale();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;//clean up the subscription on unmount
  }, []);

   const signup = async (email: string, password: string): Promise<void> => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(auth, email, password);
  };

   const signOut = async (): Promise<void> => {
    try {
      await firebaseSignOut(auth);
      setCurrentUser(null);//clears user state after signout
      router.push(`/${locale}/sign-in`);
    } catch(e:any){
        console.error('Error While Loggin Out', e)
    }
  };

  const value = { 
    currentUser, 
    signUp: signup, 
    signIn: signin, 
    signOut: signOut,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Only renders children when loading is complete */}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};