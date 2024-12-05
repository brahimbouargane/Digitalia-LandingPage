"use client";
import { Container, Icons, Wrapper } from "@/src/components";
import { BorderBeam } from "@/src/components/ui/border-beam";
import { Button } from "@/src/components/ui/button";
import Hero from "@/src/components/home/hero";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { LampContainer } from "@/src/components/ui/lamp";
import Marquee from "@/src/components/ui/marquee";
import SectionBadge from "@/src/components/ui/section-badge";
import {
  features,
  perks,
  pricingCards,
  reviews,
  technologies,
} from "@/src/constants";
import { cn } from "@/src/lib/utils";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  UserIcon,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { World } from "@/src/components/ui/globe";
import { BackgroundBeams } from "@/src/components/ui/background-beams";
import About from "@/src/components/home/about";
import { useState } from "react";
import Contact from "@/src/components/home/contact";
import Services from "@/src/components/home/services";
import Partners from "@/src/components/home/partners";

const HomePage = () => {
  const firstRow = technologies.slice(0, technologies.length / 2);
  const secondRow = technologies.slice(technologies.length / 2);

  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 ">
      {/* hero */}
      <Hero />

      {/* about */}
      <About />
      {/* Partners */}
      <Partners />
      <Services />

      {/* testimonials */}
      <Wrapper className="flex flex-col items-center justify-center py-8 relative">
        <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-center md:text-center">
            <SectionBadge title="Our Technologies" />
          </div>
        </Container>
        <Container>
          <div className="py-5 md:py-10 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee pauseOnHover className="[--duration:20s] select-none">
                {firstRow.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <figure
                      key={tech.name}
                      className="w-20 h-20 relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 p-4 flex items-center justify-center group transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                      }}
                    >
                      <Icon
                        size={32}
                        className="text-slate-400 group-hover:text-[#61DAFB] transition-colors duration-300"
                        style={{ color: tech.color ? tech.color : "" }}
                      />
                    </figure>
                  );
                })}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s] select-none"
              >
                {secondRow.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <figure
                      key={tech.name}
                      className="w-20 h-20 relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 p-4 flex items-center justify-center group transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                      }}
                    >
                      <Icon
                        size={32}
                        className="text-slate-400 group-hover:text-[#61DAFB] transition-colors duration-300"
                        style={{ color: tech.color }}
                      />
                    </figure>
                  );
                })}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-transparent"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-transparent"></div>
            </div>
          </div>
        </Container>
      </Wrapper>

      <Contact />
    </section>
  );
};

export default HomePage;
