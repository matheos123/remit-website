import { Locale, routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import Header from "@/components/Common/Header/page";
import Footer from "@/components/Common/Footer/page";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sendly",
  description: "Send money to your Ethiopian friends and family with ease",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound(); // Display 404 page if locale is not supported
  }
  const messages = await getMessages();
  return (
    <html translate="no" lang={locale} className={inter.className}>
      <body>
        {/* AuthProvider wraps everything that needs access to auth state */}
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            <Header />
            {/* children represents your page content, or other layouts like (main)/layout.tsx, (auth)/layout.tsx */}
            {children}
            <Footer />
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
