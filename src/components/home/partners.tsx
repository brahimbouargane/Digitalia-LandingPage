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

const partners = [
  {
    type: "logo",
    image: Vibe,
    name: "Vibe",
    title: "Vibe",
    description:
      "Our digital communications agency, Vibe, excels in creating innovative, customized digital strategies to maximize our customers' online visibility and impact.",
  },
  {
    type: "logo",
    image: Onoffice,
    name: "On Office",
    title: "On Office",
    description:
      "is our agency dedicated to the rental of professional office space, combining comfort and practicality to meet the needs of modern businesses.",
  },
  {
    type: "logo",
    image: NordSud,
    name: "Nord Sud Agency",
    title: "Nord Sud Agency",
    description:
      "a subsidiary of DIGITALIA GROUP, is an operational marketing and sales force agency. It helps companies achieve their sales objectives while strengthening their market presence.",
  },
  {
    type: "logo",
    image: CodingTech,
    name: "Coding Tech",
    title: "Coding Tech",
    description:
      "is our training school specializing in IT development, offering comprehensive courses in back-end and front-end development to train the experts of tomorrow.",
  },
  {
    type: "logo",
    image: Vibe,
    name: "Vibe",
    title: "Vibe",
    description:
      "Our digital communications agency, Vibe, excels in creating innovative, customized digital strategies to maximize our customers' online visibility and impact.",
  },
  {
    type: "logo",
    image: Onoffice,
    name: "On Office",
    title: "On Office",
    description:
      "is our agency dedicated to the rental of professional office space, combining comfort and practicality to meet the needs of modern businesses.",
  },
  {
    type: "logo",
    image: NordSud,
    name: "Nord Sud Agency",
    title: "Nord Sud Agency",
    description:
      "a subsidiary of DIGITALIA GROUP, is an operational marketing and sales force agency. It helps companies achieve their sales objectives while strengthening their market presence.",
  },
  {
    type: "logo",
    image: CodingTech,
    name: "Coding Tech",
    title: "Coding Tech",
    description:
      "is our training school specializing in IT development, offering comprehensive courses in back-end and front-end development to train the experts of tomorrow.",
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
                <GlareCard
                  className={cn(
                    "group", // Add group class for hover functionality
                    partner.type === "logo"
                      ? "flex items-center justify-center"
                      : "flex flex-col items-start justify-end p-6 sm:p-8"
                  )}
                >
                  <div className="absolute inset-0 flex flex-col p-6">
                    {partner.type === "logo" ? (
                      <>
                        <div className="relative flex-1 mb-4">
                          <Image
                            src={partner.image}
                            alt={partner.name}
                            fill
                            className="object-contain transition-all duration-300 filter invert brightness-0 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div className="space-y-2 ">
                          <h3 className="font-bold text-white text-xl group-hover:text-blue-400 transition-colors">
                            {partner.title}
                          </h3>
                          <p className="text-neutral-300 text-sm line-clamp-8 group-hover:text-neutral-200">
                            {partner.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col justify-end h-full space-y-2">
                        <h3 className="font-bold text-white text-xl group-hover:text-blue-400 transition-colors">
                          {partner.title}
                        </h3>
                        <p className="text-neutral-300 text-sm line-clamp-3 group-hover:text-neutral-200">
                          {partner.description}
                        </p>
                      </div>
                    )}
                  </div>
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
