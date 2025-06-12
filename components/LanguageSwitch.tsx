'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import React from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale(); 

  const handleLocaleChange = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname.substring(3)}`; 
    router.push(newPath);
    router.refresh(); 
  };

  return (
    <div className="language-switcher">
      <select
        value={currentLocale}
        onChange={(e) => handleLocaleChange(e.target.value)}
        className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2 rounded-md border border-gray-300 dark:border-gray-600"
      >
        <option value="en">English</option>
        <option value="am">አማርኛ</option>
      </select>
    </div>
  );
}