import { features } from "@/src/constants";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import SectionBadge from "../ui/section-badge";
import Icons from "../global/icons";
import Image from "next/image";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import data from "@/assets/photos/data.jpg";
import it from "@/assets/photos/it.jpg";
import cloud from "@/assets/photos/cloud.jpg";
import ai from "@/assets/photos/ai.jpg";
import consulting from "@/assets/photos/consulting.jpg";
import {
  Code2,
  BarChart,
  Cloud,
  Brain,
  UserCog,
  LucideIcon,
} from "lucide-react";

const Services = () => {
  const content = [
    {
      title: "IT Development",
      description: "Custom software and app solutions.",
      icon: Code2,
      image: it,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={it}
            className="h-full w-full object-cover"
            alt="IT Development services"
            priority
          />
        </div>
      ),
    },
    {
      title: "Data Analytics",
      description: "Unlock actionable insights.",
      icon: BarChart,
      image: data,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={data}
            className="h-full w-full object-cover"
            alt="Data Analytics visualization"
          />
        </div>
      ),
    },
    {
      title: "Cloud Solutions",
      description: "Scalable and secure infrastructure.",
      icon: Cloud,
      image: cloud,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={cloud}
            className="h-full w-full object-cover"
            alt="Cloud infrastructure solutions"
          />
        </div>
      ),
    },
    {
      title: "AI & Machine Learning",
      description: "Smarter business decisions.",
      icon: Brain,
      image: ai,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={ai}
            className="h-full w-full object-cover"
            alt="AI and Machine Learning solutions"
          />
        </div>
      ),
    },
    {
      title: "Consulting",
      description: "Strategies for digital transformation.",
      icon: UserCog,
      image: consulting,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={consulting}
            className="h-full w-full object-cover"
            alt="Digital transformation consulting"
          />
        </div>
      ),
    },
  ];
  return (
    <Wrapper
      id="services"
      className="flex flex-col items-center justify-center py-12 relative"
    >
      <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
      <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
      <Container>
        <div className="max-w-md mx-auto text-start md:text-center">
          <SectionBadge title="Services" />
          <h2 className="text-3xl bg-clip-text tracking-tight md:text-5xl md:!leading-snug  text-center bg-gradient-to-b from-neutral-400 to-white text-transparent dark:from-neutral-800 dark:to-neutral-600 font-semibold mt-6">
            Discover our Services
          </h2>
          <p className="text-muted-foreground mt-6">
            At Digitalia, we provide a comprehensive range of services designed
            to help you achieve your business goals with ease and efficiency.
          </p>
        </div>
      </Container>
      <StickyScroll content={content} />
    </Wrapper>
  );
};

export default Services;
