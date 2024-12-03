// components/ThemeToggle.tsx
"use client";

import { useTheme } from "@/src/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      // className="rounded-full p-2 border border-neutral-200 dark:border-neutral-800 transition-all duration-100
      // hover:bg-neutral-100 dark:hover:bg-neutral-800
      // hover:border-neutral-300 dark:hover:border-neutral-700 "
      className="rounded-full animate-shimmer  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-2"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-slate-700 dark:text-slate-400" />
      ) : (
        <Sun className="h-5 w-5 text-slate-700 dark:text-slate-400" />
      )}
    </button>
  );
}
