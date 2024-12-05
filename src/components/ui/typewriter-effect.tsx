"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

export const TypewriterEffectSmooth = ({
  words,
  typingSpeed = 150,
  pauseTime = 2000,
  className,
  cursorClassName,
}: {
  words: string[];
  typingSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const word = words[currentWordIndex];

    if (isTyping) {
      if (currentText === word) {
        setIsTyping(false);
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      const timeout = setTimeout(() => {
        setCurrentText(word.slice(0, currentText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const timeout = setTimeout(() => {
        setCurrentText(word.slice(0, currentText.length - 1));
      }, typingSpeed / 2);

      return () => clearTimeout(timeout);
    }
  }, [
    currentText,
    isTyping,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    pauseTime,
  ]);

  return (
    <span className="inline-flex items-center">
      <motion.span
        className={cn(
          "inline-block bg-clip-text text-transparent bg-gradient-to-b from-blue-950 to-blue-700 dark:from-blue-800 dark:to-blue-700",
          className
        )}
      >
        {currentText}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-800 dark:bg-blue-950 ml-1",
          cursorClassName
        )}
      />
    </span>
  );
};

export default TypewriterEffectSmooth;
