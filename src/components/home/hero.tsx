/* eslint-disable react/display-name */
import { ChevronRight, Mouse, MoveDown } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { technologies } from "@/src/constants";
import { useState, useEffect, memo, useRef, useMemo } from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { ActionButton } from "../ui/action-button";
import BackgroundStars from "@/assets/photos/stars.png";
import Link from "next/link";
import { Highlight } from "../ui/hero-highlight";
import cogImage from "@/assets/photos/cog.png";
import wrap1 from "@/assets/photos/Wrap1.png";
import wrap2 from "@/assets/photos/Wrap2.png";
import wrap3 from "@/assets/photos/Wrap3.png";
import wrap4 from "@/assets/photos/Wrap4.png";

import cylinderImage from "@/assets/photos/cylinder.png";
import noodleImage from "@/assets/photos/noodle.png";
import { WorldMap } from "../ui/world-map";
import dynamic from "next/dynamic";

const floatingImages = [
  {
    src: wrap1,
    alt: "Floating icon 1",
    className: "w-32 h-32 brightness-110 hue-rotate-30 hidden lg:block",
    position: "right-[20%] top-20", // top right
  },
  {
    src: wrap2,
    alt: "Floating icon 2",
    className: "w-32 h-32 brightness-110 hue-rotate-30 hidden lg:block",
    position: "left-[20%] bottom-[60%]", // bottom left
  },
  {
    src: wrap3,
    alt: "Floating icon 3",
    className: "w-32 h-32 brightness-110 hue-rotate-30 hidden lg:block ",
    position: "left-[20%] top-20", // top left
  },
  {
    src: wrap4,
    alt: "Floating icon 4",
    className: "w-32 h-32 brightness-110 hue-rotate-30 hidden lg:block",
    position: "right-[20%] bottom-[60%]", // another bottom left, slightly offset
  },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  const dots = useMemo(
    () => [
      {
        start: { lat: 16.189886, lng: -8.603869 }, // Casablanca (HQ)
        end: { lat: 44.8566, lng: 0.8522 }, // london
      },
      {
        start: { lat: 16.189886, lng: -8.603869 }, // Casablanca (HQ)
        end: { lat: 27.5074, lng: -0.1278 }, // paris
      },
      {
        start: { lat: 16.189886, lng: -8.603869 }, // Casablanca (HQ)
        end: { lat: 41.3851, lng: 2.1734 }, // Barcelona
      },
      {
        start: { lat: 16.189886, lng: -8.603869 }, // Casablanca (HQ)
        end: { lat: 30.7128, lng: -74.006 }, // New York
      },
      {
        start: { lat: 16.189886, lng: -8.603869 }, // Casablanca (HQ)
        end: { lat: 45.5017, lng: -73.5673 }, // Montreal
      },
      {
        start: { lat: 16.189886, lng: -8.603869 }, // Casablanca (HQ)
        end: { lat: 42.52, lng: 9.405 }, // Berlin
      },
    ],
    []
  );

  // return (
  //   <div className="!w-screen" id="home">
  //     <motion.section
  //       animate={{ backgroundPositionX: BackgroundStars.width }}
  //       transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
  //       className="min-h-[492px] md:min-h-[800px] relative overflow-hidden"
  //       style={{
  //         backgroundImage: `url(${BackgroundStars.src})`,
  //         backgroundPositionY,
  //       }}
  //       ref={sectionRef}
  //     >
  //       <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />
  //       {floatingImages.map((img, index) => (
  //         <motion.div
  //           key={index}
  //           className={`absolute ${img.className} ${img.position}`}
  //           initial={{ opacity: 0, y: 50 }}
  //           animate={{
  //             opacity: 1,
  //             y: 0,
  //             x: [-10, 10, -10],
  //             rotate: [-5, 5, -5],
  //           }}
  //           transition={{
  //             duration: 4,
  //             delay: index * 0.3,
  //             repeat: Infinity,
  //             repeatType: "reverse",
  //             ease: "easeInOut",
  //           }}
  //         >
  //           <Image
  //             src={img.src}
  //             alt={img.alt}
  //             width={80}
  //             height={80}
  //             className="w-full h-full object-contain"
  //           />
  //         </motion.div>
  //       ))}
  //       <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
  //         {/* Content Container */}
  //         <motion.div
  //           initial={{ opacity: 0, y: 20 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.8 }}
  //           className="flex flex-col items-center max-w-6xl mx-auto space-y-8 md:space-y-12"
  //         >
  //           {/* Heading */}
  //           <h1 className="text-2xl sm:text-3xl md:text-[70px] md:leading-tight font-semibold tracking-tighter leading-tight bg-gradient-to-br  from-neutral-600 to-white bg-clip-text text-transparent text-center max-w-5xl">
  //             Transform Your Vision into <br />
  //             Digital Masterpiece
  //           </h1>

  //           {/* Description */}
  //           <p className="text-xs sm:text-lg md:text-lg max-w-xl text-white/70 text-center">
  //             We craft digital experiences that drive growth, engage users, and
  //             elevate brands in the digital landscape.
  //           </p>

  //           <div className="flex gap-4 justify-center mt-6 md:mt-8">
  //             {[
  //               {
  //                 text: "Our Services",
  //                 color: "blue",
  //                 href: "#services",
  //                 hoverBg: "hover:bg-blue-500/10",
  //               },
  //               {
  //                 text: "Contact Us",
  //                 color: "emerald",
  //                 href: "#contact",
  //                 hoverBg: "hover:bg-orange-500/10",
  //               },
  //             ].map(({ text, color, href, hoverBg }) => (
  //               <Link key={text} href={href}>
  //                 <motion.button
  //                   whileHover={{ scale: 1.02 }}
  //                   whileTap={{ scale: 0.98 }}
  //                   className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm md:text-base font-semibold leading-6 text-white inline-block"
  //                 >
  //                   <span className="absolute inset-0 overflow-hidden rounded-full">
  //                     <span
  //                       className={`absolute inset-0 rounded-full ${
  //                         color === "blue"
  //                           ? "bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)]"
  //                           : "bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(222, 157, 86,0.6)_0%,rgba(16,185,129,0)_75%)]"
  //                       } opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
  //                     ></span>
  //                   </span>
  //                   <div
  //                     className={`relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10 transition-colors duration-300 ${hoverBg} group-hover:ring-white/20`}
  //                   >
  //                     <span>{text}</span>
  //                     <svg
  //                       width="16"
  //                       height="16"
  //                       viewBox="0 0 24 24"
  //                       fill="none"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                       className="transform transition-transform duration-300 group-hover:translate-x-0.5"
  //                     >
  //                       <path
  //                         stroke="currentColor"
  //                         strokeLinecap="round"
  //                         strokeLinejoin="round"
  //                         strokeWidth="1.5"
  //                         d="M10.75 8.75L14.25 12L10.75 15.25"
  //                       ></path>
  //                     </svg>
  //                   </div>
  //                   <span
  //                     className={`absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] ${
  //                       color === "blue"
  //                         ? "bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0"
  //                         : "bg-gradient-to-r from-orange-400/0 via-orange-400/90 to-orange-400/0 "
  //                     } transition-opacity duration-500 group-hover:opacity-40`}
  //                   ></span>
  //                 </motion.button>
  //               </Link>
  //             ))}
  //           </div>
  //           {/* World Map Container */}
  //           <div className="w-full max-w-5xl mt-12 md:mt-16">
  //             <motion.div
  //               initial={{ opacity: 0, scale: 0.95 }}
  //               animate={{ opacity: 1, scale: 1 }}
  //               transition={{ duration: 1, delay: 0.2 }}
  //             >
  //               <WorldMap
  //                 dots={dots}
  //                 className="w-full h-[400px] md:h-[500px]"
  //               />
  //             </motion.div>
  //           </div>
  //         </motion.div>
  //       </div>
  //     </motion.section>
  //   </div>
  // );
  return (
    <div className="!w-screen" id="home">
      <motion.section
        animate={{ backgroundPositionX: BackgroundStars.width }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="min-h-[70vh] relative overflow-hidden"
        style={{
          backgroundImage: `url(${BackgroundStars.src})`,
          backgroundPositionY,
        }}
        ref={sectionRef}
      >
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />

        <div className="h-full relative z-10">
          <Wrapper className="grid h-full grid-cols-1 lg:grid-cols-2 items-center mx-auto">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-6 md:space-y-8 px-4 lg:px-0 lg:pr-12 pt-16 lg:pt-0"
            >
              {/* Heading */}
              {/* <h1 className="text-3xl sm:text-4xl md:text-[70px] font-semibold tracking-tighter leading-tight bg-gradient-to-br from-neutral-600 to-white bg-clip-text text-transparent">
                Transform Your Vision into Digital Masterpiece
              </h1> */}
              <h1 className="text-3xl sm:text-3xl md:text-[65px] md:leading-tight font-semibold tracking-tighter leading-tight bg-gradient-to-br  from-neutral-600 to-white bg-clip-text text-transparent  max-w-5xl">
                Transform Your Vision into Digital Masterpiece
              </h1>

              {/* Description */}
              <p className="text-sm md:text-lg max-w-xl text-white/70">
                We craft digital experiences that drive growth, engage users,
                and elevate brands in the digital landscape.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
                {[
                  {
                    text: "Our Services",
                    color: "blue",
                    href: "#services",
                    hoverBg: "hover:bg-blue-500/10",
                  },
                  {
                    text: "Contact Us",
                    color: "emerald",
                    href: "#contact",
                    hoverBg: "hover:bg-orange-500/10",
                  },
                ].map(({ text, color, href, hoverBg }) => (
                  <Link key={text} href={href} className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm sm:text-base font-semibold leading-6 text-white inline-block"
                    >
                      <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span
                          className={`absolute inset-0 rounded-full ${
                            color === "blue"
                              ? "bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)]"
                              : "bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(222,157,86,0.6)_0%,rgba(16,185,129,0)_75%)]"
                          } opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                        ></span>
                      </span>
                      <div
                        className={`relative flex justify-center space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2.5 px-6 ring-1 ring-white/10 transition-colors duration-300 ${hoverBg} group-hover:ring-white/20`}
                      >
                        <span>{text}</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transform transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M10.75 8.75L14.25 12L10.75 15.25"
                          ></path>
                        </svg>
                      </div>
                      <span
                        className={`absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] ${
                          color === "blue"
                            ? "bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0"
                            : "bg-gradient-to-r from-orange-400/0 via-orange-400/90 to-orange-400/0"
                        } transition-opacity duration-500 group-hover:opacity-40`}
                      ></span>
                    </motion.button>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Right Column - World Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:w-[1200px] h-[400px] sm:h-[500px] md:h-screen mt-8 md:-mt-24 md:-mb-24"
            >
              <WorldMap dots={dots} className="w-full h-full" />
            </motion.div>
          </Wrapper>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
