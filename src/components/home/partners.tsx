"use client";
import React, { useCallback, useEffect } from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import SectionBadge from "../ui/section-badge";
import { GlareCard } from "../ui/glare-card";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Button } from "../ui/button";
import CodingTech from "@/assets/photos/codingtech.png";
import NordSud from "@/assets/photos/nord-sud.png";
import Onoffice from "@/assets/photos/onoffice.png";
import Vibe from "@/assets/photos/vibe.png";
import Image from "next/image";

// const partners = [
//   {
//     type: "icon",
//     content: (
//       <svg
//         width="66"
//         height="65"
//         viewBox="0 0 66 65"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-14 w-14 text-white"
//       >
//         <path
//           d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//           stroke="currentColor"
//           strokeWidth="15"
//           strokeMiterlimit="3.86874"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     type: "icon",
//     content: (
//       <svg
//         width="66"
//         height="65"
//         viewBox="0 0 66 65"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-14 w-14 text-white"
//       >
//         <path
//           d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//           stroke="currentColor"
//           strokeWidth="15"
//           strokeMiterlimit="3.86874"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     type: "text",
//     title: "The greatest trick",
//     description:
//       "The greatest trick the devil ever pulled was to convince the world that he didn't exist.",
//   },
//   {
//     type: "text",
//     title: "The greatest trick",
//     description:
//       "The greatest trick the devil ever pulled was to convince the world that he didn't exist.",
//   },
//   {
//     type: "text",
//     title: "The greatest trick",
//     description:
//       "The greatest trick the devil ever pulled was to convince the world that he didn't exist.",
//   },
//   {
//     type: "text",
//     title: "The greatest trick",
//     description:
//       "The greatest trick the devil ever pulled was to convince the world that he didn't exist.",
//   },
//   {
//     type: "text",
//     title: "The greatest trick",
//     description:
//       "The greatest trick the devil ever pulled was to convince the world that he didn't exist.",
//   },
//   // Add more partners as needed
// ];
const partners = [
  {
    type: "logo",
    image: Vibe,
    name: "Partner 1",
  },
  {
    type: "logo",
    image: Onoffice,
    name: "Partner 2",
  },
  {
    type: "logo",
    image: NordSud,
    name: "Partner 3",
  },
  {
    type: "logo",
    image: CodingTech,
    name: "Partner 4",
  },
  {
    type: "logo",
    image: Vibe,
    name: "Partner 1",
  },
  {
    type: "logo",
    image: Onoffice,
    name: "Partner 2",
  },
  {
    type: "logo",
    image: NordSud,
    name: "Partner 3",
  },
  {
    type: "logo",
    image: CodingTech,
    name: "Partner 4",
  },
];

const Partners = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [AutoPlay({ delay: 3000, stopOnInteraction: false })]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Wrapper
      id="partners"
      className=" flex flex-col items-center justify-center py-10 relative"
    >
      <Container className="mb-12">
        <div className="max-w-md mx-auto text-center md:text-center">
          <SectionBadge title="Our Partners" />
        </div>
      </Container>
      <Container className="relative w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden -mx-4 sm:-mx-6" ref={emblaRef}>
          <div className="flex -ml-4">
            {partners.map((partner, index) => (
              <div key={index} className="flex-none pl-3">
                {/* <GlareCard
                  className={cn(
                    "h-full transition-all duration-300  hover:scale-[1.02]",
                    partner.type === "icon"
                      ? "flex items-center justify-center p-8 sm:p-10"
                      : "flex flex-col items-start justify-end p-6 sm:p-8",
                    "backdrop-blur-sm bg-opacity-90"
                  )}
                > */}
                <GlareCard
                  className={cn(
                    "group", // Add group class for hover functionality
                    partner.type === "logo"
                      ? "flex items-center justify-center"
                      : "flex flex-col items-start justify-end p-6 sm:p-8"
                  )}
                >
                  {partner.type === "logo" ? (
                    <div className="relative w-full h-full flex items-center justify-center p-8 brightness-0 invert ">
                      <div className="relative w-full aspect-square">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          className="object-contain transition-all duration-300 "
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* <h3 className="font-bold text-white text-xl sm:text-2xl">
                        {partner?.title}
                      </h3>
                      <p className="font-normal text-neutral-200 mt-4 text-sm sm:text-base line-clamp-3">
                        {partner.description}
                      </p> */}
                    </>
                  )}
                </GlareCard>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Enhanced for better UX */}
        <div className="hidden md:block">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Previous slide" // Added accessible name
            title="Previous slide" // Added tooltip
            className={cn(
              "absolute left-4 lg:left-8 top-1/2 -translate-y-1/2",
              "bg-primary/40 backdrop-blur-sm hover:bg-background/90",
              "transition-opacity duration-200",
              !prevBtnEnabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Next slide" // Added accessible name
            title="Next slide" // Added tooltip
            className={cn(
              "absolute right-4 lg:right-8 top-1/2 -translate-y-1/2",
              "bg-primary/40 backdrop-blur-sm hover:bg-background/90",
              "transition-opacity duration-200",
              !nextBtnEnabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center mt-6 gap-2 md:hidden">
          <div className="h-1 w-16 bg-primary/20 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-primary rounded-full" />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Partners;
