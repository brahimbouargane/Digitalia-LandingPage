/* eslint-disable react/display-name */
import { ChevronRight, Mouse, MoveDown } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { technologies } from "@/src/constants";
import { useState, useEffect, memo, useRef } from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { ActionButton } from "../ui/action-button";
import BackgroundStars from "@/assets/photos/stars.png";
import Link from "next/link";
import { Highlight } from "../ui/hero-highlight";

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const buttonAnimation = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.1,
    },
  },
  whileTap: { scale: 0.95 },
};
const planetAnimation = {
  initial: {
    y: 0,
    x: -180,
    opacity: 0,
  },
  animate: {
    y: -280,
    x: -180,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.3,
    },
  },
};
const ringAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 0.2,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};
const WelcomeButton = memo(() => (
  <button className="group relative grid overflow-hidden rounded-full px-3 sm:px-4 py-0.5 sm:py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-100">
    <span>
      <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
    </span>
    <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-100 group-hover:bg-neutral-900" />
    <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
    <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
      <Image
        src="/icons/sparkles-dark.svg"
        alt="✨"
        width={24}
        height={24}
        className="w-4 h-4"
        priority={false}
      />
      Welcome To Your Best Choice
      <ChevronRight className="w-4 h-4" />
    </span>
  </button>
));
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

  const words = [
    "Digital Masterpiece",
    "Virtual Horizon",
    "Online Revolution",
    "Digital Reality",
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start end`, "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <div className="!w-screen" id="home">
      <motion.section
        animate={{ backgroundPositionX: BackgroundStars.width }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className={
          "h-[492px]  md:h-[800px]  flex items-center  overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        }
        style={{
          backgroundImage: `url(${BackgroundStars.src})`,
          backgroundPositionY,
        }}
        ref={sectionRef}
      >
        <div
          className={
            "absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(59,130,246,0.5)_15%,rgb(0,24,65,0.5)_78%,transparent)]"
          }
        />
        {/* Planet Logic */}
        {/* <div
          className={
            "absolute size-64 md:size-96 bg-blue-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(148,184,255)_37.7%,rgb(0,42,102))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(59,130,246)]"
          }
        /> */}
        <motion.div
          variants={planetAnimation}
          initial="initial"
          animate="animate"
          className={
            "absolute size-64 md:size-96 bg-blue-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(148,184,255)_37.7%,rgb(0,42,102))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(59,130,246)]"
          }
        />
        {/* Rings + Mini planets Logic */}
        <motion.div
          variants={ringAnimation}
          initial="initial"
          animate="animate"
          style={{ translateY: "-60%", translateX: "-50%" }}
          className={
            "absolute size-[344px] md:size-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          }
        >
          <div
            className={
              "absolute size-2 bg-white rounded-full top-1/ left-0 -translate-x-1/2 -translate-y-1/2"
            }
          />
          <div
            className={
              "absolute size-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            }
          />
          <div
            className={
              "absolute size-5 border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center"
            }
          >
            <div className={"size-2 bg-white rounded-full"} />
          </div>
        </motion.div>
        <motion.div
          style={{ translateY: "-60%", translateX: "-50%" }}
          animate={{ rotate: "-1turn" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className={
            "absolute size-[444px] md:size-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
          }
        />
        <motion.div
          style={{ translateY: "-60%", translateX: "-50%" }}
          animate={{ rotate: "1turn" }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className={
            "absolute size-[544px] md:size-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          }
        >
          <div
            className={
              "absolute size-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
            }
          />
          <div
            className={
              "absolute size-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"
            }
          />
        </motion.div>
        {/* Hero Section Content Logic */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className={"container relative mb-0 lg:mb-28 px-4 md:px-0"}
        >
          <motion.h1
            variants={fadeInUp}
            className={
              "text-3xl sm:text-4xl md:text-[80px] md:leading-tight font-semibold bg-white tracking-tighter leading-tight bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(32,99,138,0.5))] bg-clip-text text-transparent text-center"
            }
          >
            Transform Your Vision into <br />a{" "}
            <Highlight className="text-zinc-300">Digital Masterpiece</Highlight>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className={
              "text-base sm:text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-4 md:mt-5 text-center px-4 sm:px-0"
            }
          >
            We craft digital experiences that drive growth, engage users, and
            elevate brands in the digital landscape.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className={"flex gap-2 justify-center mt-6 md:mt-8"}
          >
            <Link href="#services">
              <motion.button
                variants={buttonAnimation}
                whileHover="whileHover"
                whileTap="whileTap"
                className="p-[3px] relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800 rounded-lg" />
                <div className="px-4 sm:px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-sm sm:text-base">
                  Our Services
                </div>
              </motion.button>
            </Link>

            <Link href="#contact">
              <motion.button
                variants={buttonAnimation}
                whileHover="whileHover"
                whileTap="whileTap"
                className="p-[3px] relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800 rounded-lg" />
                <div className="px-4 sm:px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-sm sm:text-base">
                  Contact Us
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Hero;
