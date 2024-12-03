import { ArrowRight, ChevronRight, Mouse, MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { FlipWords } from "../ui/flip-words";
import Marquee from "../ui/marquee";
import { technologies } from "@/src/constants";
import { useState, useEffect } from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Accessibility-enhanced button component
const AccessibleButton = ({ children, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Button
      {...props}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`group relative ${props.className} ${
        isFocused ? "ring-2 ring-primary ring-offset-2" : ""
      }`}
    >
      {children}
    </Button>
  );
};

// Loading indicator for images
const LoadingImage = ({ src, alt, ...props }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const firstRow = technologies.slice(0, technologies.length / 2);
  const words = [
    "Digital Masterpiece",
    "Virtual Horizon",
    "Online Revolution",
    "Digital Reality",
  ];

  return (
    <Wrapper id="home">
      {/* Enhanced Grid Background with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]"
      />
      {/* Add Google Gemini Effect */}
      <div className="absolute inset-0 z-0">
        <GoogleGeminiEffect />
      </div>
      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col items-center text-sm text-neutral-400">
          <Mouse className="w-6 h-6 mb-2" />
          <MoveDown className="w-4 h-4" />
        </div>
      </motion.div>

      <Container>
        <div className="rounded-md relative flex flex-col items-center  antialiased w-full min-h-screen pt-12">
          <div className="flex flex-col items-center justify-center h-full">
            {/* Enhanced Welcome Button with Hover Effect */}
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                <Image
                  src="/icons/sparkles-dark.svg"
                  alt="✨"
                  width={24}
                  height={24}
                  className="w-4 h-4"
                />
                Welcome To Your Best Choice
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>

            {/* Main Content with Enhanced Accessibility */}
            <motion.div
              className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              role="main"
            >
              <motion.h1
                variants={titleVariants}
                className="text-xl bg-clip-text tracking-tight md:text-6xl md:!leading-snug font-semibold text-center bg-gradient-to-b from-neutral-400 to-white text-transparent dark:from-neutral-800 dark:to-neutral-600"
                tabIndex={0}
              >
                Transform Your Vision into a{" "}
                <span className="relative">
                  <FlipWords words={words} />
                </span>
              </motion.h1>

              <motion.p
                className="max-w-xl mx-auto text-sm md:text-lg text-neutral-200 dark:text-neutral-700 text-center mt-6"
                variants={titleVariants}
                tabIndex={0}
              >
                We craft digital experiences that drive growth, engage users,
                and elevate brands in the digital landscape.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
