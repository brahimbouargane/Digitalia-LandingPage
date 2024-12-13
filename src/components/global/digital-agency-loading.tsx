"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Palette, Zap, Monitor } from "lucide-react";

interface LoaderProps {
  children: React.ReactNode;
  loadingDuration?: number;
  transitionDuration?: number;
}

const digitalIcons = [
  { Icon: Code, color: "text-blue-500" },
  { Icon: Palette, color: "text-purple-500" },
  { Icon: Zap, color: "text-yellow-500" },
  { Icon: Monitor, color: "text-green-500" },
];

const words = ["Innovate", "Create", "Design", "Develop"];

export function DigitalAgencyLoading({
  children,
  loadingDuration = 3000,
  transitionDuration = 1000,
}: LoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), transitionDuration);
    }, loadingDuration);

    return () => {
      clearInterval(wordInterval);
      clearTimeout(timer);
    };
  }, [loadingDuration, transitionDuration]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          >
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-40 h-40 rounded-full border-t-4 border-r-4 border-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              {/* Inner rotating ring */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 rounded-full border-b-4 border-l-4 border-purple-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              {/* Icons container */}
              <div className="absolute inset-0 flex items-center justify-center">
                {digitalIcons.map(({ Icon, color }, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${color}`}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 1,
                      },
                    }}
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </motion.div>
                ))}
              </div>

              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl animate-pulse" />
            </div>

            {/* Words animation */}
            <motion.h2
              className="absolute mt-48 text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="block text-center"
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content with entrance animation */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              ease: "easeOut",
              staggerChildren: 0.2,
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
