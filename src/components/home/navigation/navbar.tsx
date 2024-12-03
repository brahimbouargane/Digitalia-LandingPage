"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container, Icons } from "@/src/components";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/src/contexts/ThemeContext";
import { Button } from "../../ui/button";
import { cn } from "@/src/lib/utils";

const Navbar = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="px-4 md:px-16 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          {/* Logo */}
          <div className="flex items-start">
            <Link href="#home" className="flex items-center gap-2">
              {theme === "light" ? (
                <Icons.logo className="w-50 " />
              ) : (
                <Icons.logoDark className="w-50 " />
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center -mx-1">
              {" "}
              {/* Negative margin to remove gaps */}
              {menuItems.map((item, idx) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className="px-4 py-2 relative block group transition-colors duration-300 hover:text-gray-800  "
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.span
                        className="absolute inset-0 -z-10 bg-neutral-200 dark:bg-slate-800/[0.8] rounded-3xl pointer-events-none "
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.15 },
                        }}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.15, delay: 0.2 },
                        }}
                      />
                    )}
                    <span className="relative z-10 ">{item.label}</span>
                  </AnimatePresence>
                </Link>
              ))}
            </ul>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#contact">
              <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Contact Us
              </button>
            </Link>
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Right Section */}
          <div className="flex md:hidden items-center gap-4">
            {/* <ThemeToggle /> */}
            <button
              onClick={toggleMenu}
              className={cn(
                "p-2 rounded-lg transition-colors",
                "hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-screen fixed inset-0 top-14 bg-background/95 backdrop-blur-lg z-40 md:hidden"
            >
              <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col px-8"
              >
                <ul className="px-4 py-4 space-y-6 items-center text-center">
                  {menuItems.map((item, i) => (
                    <motion.li
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * i }}
                      key={item.label}
                      className="flex justify-start"
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "text-2xl font-medium transition-colors duration-200",
                          "hover:text-foreground/80"
                        )}
                        onClick={() => {
                          setIsMenuOpen(false);
                          document.body.style.overflow = "unset";
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      variant="outline"
                      className="rounded-full px-8 py-6 text-lg w-full"
                      asChild
                    >
                      <Link
                        href="#contact"
                        onClick={() => {
                          setIsMenuOpen(false);
                          document.body.style.overflow = "unset";
                        }}
                      >
                        Contact Us
                      </Link>
                    </Button>
                  </motion.li>
                </ul>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Navbar;
