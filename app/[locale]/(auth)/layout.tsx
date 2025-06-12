// app/[locale]/(auth)/layout.tsx
import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SendlyLogo from '@/public/sendly_logo-fullcolor-rgb.png'; 

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const t = useTranslations('Auth');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-gray-900 rounded-xl shadow-2xl  transition-colors duration-300 border border-gray-100 dark:border-gray-800">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;