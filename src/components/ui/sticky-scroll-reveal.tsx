"use client";
import React, { useRef, useEffect } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface Content {
  title: string;
  icon: any;
  description: string;
  details?: any;
  content?: React.ReactNode;
}

interface StickyScrollProps {
  content: Content[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Accessibility: Ensure content is readable by screen readers
  useEffect(() => {
    const activeSection = contentRef.current?.children[
      activeCard
    ] as HTMLElement;
    if (activeSection) {
      activeSection.setAttribute("aria-expanded", "true");
    }
  }, [activeCard]);

  // Smooth scroll tracking with improved accuracy
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionHeight = 1 / content.length;
    const currentSection = Math.floor(latest / sectionHeight);
    if (currentSection !== activeCard && currentSection < content.length) {
      setActiveCard(currentSection);
    }
  });

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: activeCard === index ? 1 : 0.3,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen relative flex flex-col lg:flex-row justify-between gap-10  py-5 lg:px-10 lg:py-20 "
    >
      {/* Text Content */}
      <div className="relative flex items-start w-full lg:w-1/2 ">
        <div className="max-w-2xl w-full">
          {content.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={`${item.title}-${index}`}
                className={cn(
                  "py-10 lg:py-20", // Base padding
                  index === 0 ? "mt-0" : "mt-20 lg:mt-20", // First item no top margin
                  index === content.length - 1 ? "!mt-0" : "!mt-0" // Adjust last item margin
                )}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                role="region"
                aria-label={`Section ${index + 1}: ${item.title}`}
              >
                <div className="flex gap-4">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 mb-4 text-primary" />
                  <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-100">
                    {item.title}
                  </motion.h2>
                </div>

                <div className="text-base  text-slate-300 w-full max-w-full md:max-w-fit mt-6 px-4 sm:px-0">
                  <motion.p className="mb-4">{item.description}</motion.p>
                  <ul className="space-y-2 w-full">
                    {item.details.map((detail: any, index: any) => (
                      <li key={index} className="flex items-start">
                        <motion.span className="mr-2 flex-shrink-0 text-primary">
                          •
                        </motion.span>
                        <motion.span className="flex-1">{detail}</motion.span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile/Tablet Image - shown below content */}
                <div className="lg:hidden mt-8 w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full"
                  >
                    {item.content}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Desktop Image Content - sticky on side */}
      <div
        className={cn(
          "hidden lg:block h-[400px] w-full lg:w-[600px] rounded-lg sticky top-20 overflow-hidden shadow-lg",
          contentClassName
        )}
      >
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          key={activeCard}
          className="w-full h-full"
        >
          {content[activeCard].content}
        </motion.div>
      </div>
    </motion.div>
  );
};
