// src/components/auth/GoogleSignInButton.tsx
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { auth } from '@/firebaseConfig'; 
import { GoogleAuthProvider, signInWithPopup, AuthError } from 'firebase/auth';
import { Loader2 } from 'lucide-react'; // For loading spinner
import Image from 'next/image'; // For Google icon
import SendlyLogo from '@/public/sendly_logo-fullcolor-rgb.png'; 
import Google from "@/public/google.png"
// You might want to define a more specific type for Google icon if you have one
// For now, we'll use a public URL or local asset.
// For a high-quality Google icon, consider using a local SVG asset or a library like 'react-icons'
// const GoogleIcon = "https://www.gstatic.com/firebase/console/images/app_icons/google.png";

interface GoogleSignInButtonProps {
  onSignInSuccess?: (userId: string) => void;
  onSignInError?: (error: string) => void;
}

const GoogleSignInButton = ({ onSignInSuccess, onSignInError }: GoogleSignInButtonProps) => {
  const router = useRouter();
  const locale = useLocale();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const provider = new GoogleAuthProvider();
      // Optional: Add custom parameters if needed, e.g., prompt for re-selection
      // provider.setCustomParameters({
      //   prompt: 'select_account'
      // });

      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const user = result.user;

      // This is the Firebase ID token. You might need to send this to your own backend.
      const idToken = await user.getIdToken();

      console.log('Firebase Google Sign-In Successful!');
      console.log('User:', user);
      console.log('ID Token:', idToken);

      // --- Important: Send ID Token to your own backend if you have one ---
      // For a remittance app, you WILL need to do this to securely link
      // the Firebase user to your own database user and manage custom sessions.
      // Example:
      // await fetch('/api/auth/verify-google-token', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ idToken })
      // });
      // -------------------------------------------------------------------

      if (onSignInSuccess) {
        onSignInSuccess(user.uid);
      } else {
        // Default redirect to dashboard after successful sign-in
        router.push(`/${locale}/dashboard`);
      }

    } catch (error: any) {
      setIsLoading(false);
      let errorMessage =  'Google Sign-In failed.';

      if (error && typeof error === 'object' && 'code' in error) {
        // Handle specific Firebase Auth errors
        switch ((error as { code: string }).code) {
          case 'auth/popup-closed-by-user':
            errorMessage ='Sign-in popup closed. Please try again.';
            break;
          case 'auth/cancelled-popup-request':
            errorMessage = 'Another sign-in popup is already open. Please complete it or close it.';
            break;
          case 'auth/account-exists-with-different-credential':
            errorMessage = 'An account with this email already exists with different credentials. Try signing in with a different method.';
            break;
          // Add more cases as needed
          default:
            console.error('Firebase Auth Error:', (error as { code: string; message?: string }).code, (error as { message?: string }).message);
            errorMessage = `${('googleSignInFailed')} (${(error as { code: string }).code})`;
        }
      } else {
        console.error('General Sign-In Error:', error);
      }

      setError(errorMessage);
      if (onSignInError) {
        onSignInError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md text-base font-medium transition-colors duration-200
                   bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300
                   dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 dark:border-gray-600"
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        <Image src={Google} alt="Google logo" width={20} height={20} className="rounded-full" />
        {'Sign In with Google'}
      </Button>
      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}
    </div>
  );
};

export default GoogleSignInButton;