// src/app/(auth)/sign-in/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { useAuth } from '@/context/AuthContext';
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import LinkItem from "@/components/LinkItem";
import Link from "next/link";
import { GoogleAuthProvider, signInWithPopup, AuthError } from 'firebase/auth';
import GoogleSignInButton from "@/components/GoogleSignInButton";
import {auth} from '@/firebaseConfig'
export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Common");
  // const { signIn: signin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    // try {
    //   await signin(email, password);
    //   router.push('/dashboard');
    // } catch (err: any) {
    //   setError(err.message || 'Failed to sign in.');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6 text-white">Sign In</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg shadow-md"
      >
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500  text-gray-900 dark:text-gray-100"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500  text-gray-900 dark:text-gray-100"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
        <p className="mt-4 text-start text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign Up
          </a>
        </p>
        <div className="flex-col justify-between items-center">
          <p className="text-center my-4">Or</p>
          <GoogleSignInButton />
        </div>
        {/* <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          <a
            href="/forgot-password"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Forgot Password?
          </a>
        </p> */}
      </form>
      <Link className="dark:text-white " href={`/${locale}`}>
        Back
      </Link>
    </div>
  );
}
