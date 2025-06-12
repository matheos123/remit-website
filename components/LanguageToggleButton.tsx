// components/LanguageToggleButton.tsx
"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button'; 

const LanguageToggleButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'am' : 'en';
    // Replace the current locale in the path with the new one
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <Button onClick={toggleLanguage} variant="ghost" className="text-gray-700 dark:text-gray-200 cursor-pointer ">
      {currentLocale === 'en' ? 'AM' : 'EN'} {/* Display the other language's code */}
    </Button>
  );
};

export default LanguageToggleButton;