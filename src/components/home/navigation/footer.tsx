"use client";

import Icons from "@/src/components/global/icons";
import Link from "next/link";
import { useTheme } from "@/src/contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flex flex-col items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:py-16">
      {/* Background blur effects */}
      <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
      <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center w-full text-center">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center">
          {theme === "light" ? (
            <Icons.logo className="w-56 md:w-72" />
          ) : (
            <Icons.logoDark className="w-56 md:w-72" />
          )}
        </Link>

        {/* Description */}
        <p className="text-muted-foreground text-sm max-w-[450px]">
          Transforming businesses through digital.
        </p>
      </div>

      {/* Copyright */}
      <div className="mt-4 border-t border-border/40 pt-4 md:pt-8 w-full text-center">
        <p className="text-sm text-muted-foreground uppercase">
          &copy; {new Date().getFullYear()} DIGITALIA SOLUTIONS. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
