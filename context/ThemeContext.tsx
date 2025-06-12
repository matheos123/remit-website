// src/context/ThemeContext.ts (or wherever useTheme is defined)
import { useEffect, useState } from "react";
// import { OctagonAlert } from "lucide-react"; // OctagonAlert not used, can remove

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light"); // Default to light

  // Effect to read initial theme from localStorage or system preference
  useEffect(() => {
    // We only want to set the theme from localStorage/system once on mount
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []); // Empty dependency array ensures this runs once on mount

  // Effect to apply the theme class to the documentElement
  // This will run on initial mount (after the first useEffect)
  // and whenever the 'theme' state changes (e.g., from toggleTheme)
  useEffect(() => {
    const root = document.documentElement;
    // Always remove 'light' class and add 'dark' if theme is dark, or vice versa
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light"); // Explicitly remove 'light' if you use it
    } else {
      root.classList.remove("dark");
      root.classList.add("light"); // Explicitly add 'light' if you use it
    }
    // Save theme preference to localStorage every time it changes
    localStorage.setItem("theme", theme);
  }, [theme]); // Depend only on 'theme' state

  // Sets up a listener for when the user changes their OS-level theme preference.
  // Only updates the theme if user has not manually chosen a theme (i.e., no 'theme' in localStorage).
  // Cleans up the listener when the component unmounts.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      // Only react to system preference changes if the user hasn't explicitly set a theme
      // If localStorage has 'theme', it means user made a choice, so don't override.
      if (!localStorage.getItem("theme")) { // Check if 'theme' key exists
        setTheme(mediaQuery.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []); // Empty dependency array means this listener is set up once

  // Function to toggle the theme between "dark" and "light".
  // It updates the theme state. The useEffect above will handle applying the class and saving to localStorage.
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? "light" : "dark"));
  };

  // The 'mount' state is no longer needed to be returned or managed in this way.
  return { theme, toggleTheme };
}