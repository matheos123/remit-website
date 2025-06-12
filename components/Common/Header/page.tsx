"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SendlyLogo from "@/public/sendly_logo-fullcolor-rgb.png"; // logo image
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useLocale, useTranslations } from "next-intl";
import LinkItem from "@/components/LinkItem";
import LanguageToggleButton from "@/components/LanguageToggleButton";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {
  
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const locale = useLocale();
  const t = useTranslations("Common");
  const h = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {currentUser,loading,signOut} = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = (href: string) => {
    setIsMenuOpen(false); // Close menu on link click
    // For internal anchor links, no need to navigate.
    // For actual page links, use router.push.
    if (href.startsWith("/")) {
      // Only push if it's a route
      router.push(href);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-filter backdrop-blur-sm bg-opacity-10 bg-clip-padding shadow-sm" // More consistent dark background
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href={`/${locale}`}>
              {" "}
              {/* Link to localized homepage */}
              <Image
                width={120}
                height={30}
                src={SendlyLogo}
                alt="Sendly Logo"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <LinkItem href={`/${locale}#features`} label={h("features")} />{" "}
            {/* Use locale for anchors too if it's a single page app */}
            <LinkItem
              href={`/${locale}#how-it-works`}
              label={h("how-it-works")}
            />
            <LinkItem
              href={`/${locale}#testimonials`}
              label={h("testimonials")}
            />
            <Button
              onClick={() => router.push(`/${locale}/sign-in`)}
              variant="ghost"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-base font-medium"
            >
              {t("signIn")}
            </Button>
            {/* Get Started Button */}
            <Link href={`/${locale}/sign-up`} passHref>
              <Button className="bg-[#024D0D] hover:bg-[#04DC6D] text-white font-bold px-5 py-2 rounded-lg transition-all duration-300 text-base shadow-md hover:shadow-lg">
                {t("getStarted")}
              </Button>
            </Link>
            <LanguageToggleButton />
            <Button
              onClick={toggleTheme}
              variant="ghost" // Use ghost variant for a clean icon button
              size="icon" // Make it a small, square button for the icon
              className="rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme" // Accessibility
            >
              {theme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile menu button and Theme/Language toggles for Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Switcher (mobile) */}
            <LanguageToggleButton />

            {/* Theme Toggle Button (mobile) */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Open/Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4 absolute w-full left-0 shadow-lg">
            <div className="flex flex-col items-start px-4 space-y-4 w-full">
              <LinkItem href={`/${locale}#features`} label={h("features")} />
              <LinkItem
                href={`/${locale}#how-it-works`}
                label={h("how-it-works")}
              />
              <LinkItem
                href={`/${locale}#testimonials`}
                label={h("testimonials")}
              />

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4 space-y-3">
                <Button
                  onClick={() => handleMobileLinkClick(`/${locale}/sign-in`)}
                  variant="ghost"
                  className="w-full text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 justify-start"
                >
                  {t("signIn")}
                </Button>
                <Link href={`/${locale}/sign-up`} passHref>
                  <Button className="w-full bg-[#024D0D] hover:bg-[#04DC6D] text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 text-base shadow-md hover:shadow-lg">
                    {t("getStarted")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
