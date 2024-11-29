import { Container, Icons, Wrapper } from "@/src/components";
import { BorderBeam } from "@/src/components/ui/border-beam";
import { Button } from "@/src/components/ui/button";
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
import { features, perks, pricingCards, reviews } from "@/src/constants";
import { cn } from "@/src/lib/utils";
import { ArrowRight, ChevronRight, UserIcon, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const World = dynamic(
  () => import("@/src/components/ui/globe").then((mod) => mod.World),
  {
    ssr: false,
    loading: () => <div className="h-[600px]"></div>,
  }
);

const HomePage = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  const globeConfig = {
    pointSize: 10,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  // const sampleArcs = [
  //   {
  //     order: 1,
  //     startLat: -19.885592,
  //     startLng: -43.951191,
  //     endLat: -22.9068,
  //     endLng: -43.1729,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 1,
  //     startLat: 28.6139,
  //     startLng: 77.209,
  //     endLat: 3.139,
  //     endLng: 101.6869,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 1,
  //     startLat: -19.885592,
  //     startLng: -43.951191,
  //     endLat: -1.303396,
  //     endLng: 36.852443,
  //     arcAlt: 0.5,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 2,
  //     startLat: 1.3521,
  //     startLng: 103.8198,
  //     endLat: 35.6762,
  //     endLng: 139.6503,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 2,
  //     startLat: 51.5072,
  //     startLng: -0.1276,
  //     endLat: 3.139,
  //     endLng: 101.6869,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 2,
  //     startLat: -15.785493,
  //     startLng: -47.909029,
  //     endLat: 36.162809,
  //     endLng: -115.119411,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 3,
  //     startLat: -33.8688,
  //     startLng: 151.2093,
  //     endLat: 22.3193,
  //     endLng: 114.1694,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 3,
  //     startLat: 21.3099,
  //     startLng: -157.8581,
  //     endLat: 40.7128,
  //     endLng: -74.006,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 3,
  //     startLat: -6.2088,
  //     startLng: 106.8456,
  //     endLat: 51.5072,
  //     endLng: -0.1276,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 4,
  //     startLat: 11.986597,
  //     startLng: 8.571831,
  //     endLat: -15.595412,
  //     endLng: -56.05918,
  //     arcAlt: 0.5,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 4,
  //     startLat: -34.6037,
  //     startLng: -58.3816,
  //     endLat: 22.3193,
  //     endLng: 114.1694,
  //     arcAlt: 0.7,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 4,
  //     startLat: 51.5072,
  //     startLng: -0.1276,
  //     endLat: 48.8566,
  //     endLng: -2.3522,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 5,
  //     startLat: 14.5995,
  //     startLng: 120.9842,
  //     endLat: 51.5072,
  //     endLng: -0.1276,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 5,
  //     startLat: 1.3521,
  //     startLng: 103.8198,
  //     endLat: -33.8688,
  //     endLng: 151.2093,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 5,
  //     startLat: 34.0522,
  //     startLng: -118.2437,
  //     endLat: 48.8566,
  //     endLng: -2.3522,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 6,
  //     startLat: -15.432563,
  //     startLng: 28.315853,
  //     endLat: 1.094136,
  //     endLng: -63.34546,
  //     arcAlt: 0.7,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 6,
  //     startLat: 37.5665,
  //     startLng: 126.978,
  //     endLat: 35.6762,
  //     endLng: 139.6503,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 6,
  //     startLat: 22.3193,
  //     startLng: 114.1694,
  //     endLat: 51.5072,
  //     endLng: -0.1276,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 7,
  //     startLat: -19.885592,
  //     startLng: -43.951191,
  //     endLat: -15.595412,
  //     endLng: -56.05918,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 7,
  //     startLat: 48.8566,
  //     startLng: -2.3522,
  //     endLat: 52.52,
  //     endLng: 13.405,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 7,
  //     startLat: 52.52,
  //     startLng: 13.405,
  //     endLat: 34.0522,
  //     endLng: -118.2437,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 8,
  //     startLat: -8.833221,
  //     startLng: 13.264837,
  //     endLat: -33.936138,
  //     endLng: 18.436529,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 8,
  //     startLat: 49.2827,
  //     startLng: -123.1207,
  //     endLat: 52.3676,
  //     endLng: 4.9041,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 8,
  //     startLat: 1.3521,
  //     startLng: 103.8198,
  //     endLat: 40.7128,
  //     endLng: -74.006,
  //     arcAlt: 0.5,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 9,
  //     startLat: 51.5072,
  //     startLng: -0.1276,
  //     endLat: 34.0522,
  //     endLng: -118.2437,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 9,
  //     startLat: 22.3193,
  //     startLng: 114.1694,
  //     endLat: -22.9068,
  //     endLng: -43.1729,
  //     arcAlt: 0.7,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 9,
  //     startLat: 1.3521,
  //     startLng: 103.8198,
  //     endLat: -34.6037,
  //     endLng: -58.3816,
  //     arcAlt: 0.5,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 10,
  //     startLat: -22.9068,
  //     startLng: -43.1729,
  //     endLat: 28.6139,
  //     endLng: 77.209,
  //     arcAlt: 0.7,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 10,
  //     startLat: 34.0522,
  //     startLng: -118.2437,
  //     endLat: 31.2304,
  //     endLng: 121.4737,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 10,
  //     startLat: -6.2088,
  //     startLng: 106.8456,
  //     endLat: 52.3676,
  //     endLng: 4.9041,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 11,
  //     startLat: 41.9028,
  //     startLng: 12.4964,
  //     endLat: 34.0522,
  //     endLng: -118.2437,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 11,
  //     startLat: -6.2088,
  //     startLng: 106.8456,
  //     endLat: 31.2304,
  //     endLng: 121.4737,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 11,
  //     startLat: 22.3193,
  //     startLng: 114.1694,
  //     endLat: 1.3521,
  //     endLng: 103.8198,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 12,
  //     startLat: 34.0522,
  //     startLng: -118.2437,
  //     endLat: 37.7749,
  //     endLng: -122.4194,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 12,
  //     startLat: 35.6762,
  //     startLng: 139.6503,
  //     endLat: 22.3193,
  //     endLng: 114.1694,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 12,
  //     startLat: 22.3193,
  //     startLng: 114.1694,
  //     endLat: 34.0522,
  //     endLng: -118.2437,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 13,
  //     startLat: 52.52,
  //     startLng: 13.405,
  //     endLat: 22.3193,
  //     endLng: 114.1694,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 13,
  //     startLat: 11.986597,
  //     startLng: 8.571831,
  //     endLat: 35.6762,
  //     endLng: 139.6503,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 13,
  //     startLat: -22.9068,
  //     startLng: -43.1729,
  //     endLat: -34.6037,
  //     endLng: -58.3816,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 14,
  //     startLat: -33.936138,
  //     startLng: 18.436529,
  //     endLat: 21.395643,
  //     endLng: 39.883798,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  // ];
  const sampleArcs = [
    {
      order: 1,
      startLat: 33.5731,
      startLng: -7.5898, // Casablanca
      endLat: 48.8566,
      endLng: 2.3522, // Paris
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 33.5731,
      startLng: -7.5898, // Casablanca
      endLat: 48.8566,
      endLng: 2.3522, // Paris
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 33.5731,
      startLng: -7.5898, // Casablanca
      endLat: 48.8566,
      endLng: 2.3522, // Paris
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 48.8566,
      startLng: 2.3522, // Paris
      endLat: 33.5731,
      endLng: -7.5898, // Casablanca
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 48.8566,
      startLng: 2.3522, // Paris
      endLat: 33.5731,
      endLng: -7.5898, // Casablanca
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 48.8566,
      startLng: 2.3522, // Paris
      endLat: 33.5731,
      endLng: -7.5898, // Casablanca
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 33.5731,
      startLng: -7.5898, // Casablanca
      endLat: 41.3851,
      endLng: 2.1734, // Barcelona
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 33.5731,
      startLng: -7.5898, // Casablanca
      endLat: 41.3851,
      endLng: 2.1734, // Barcelona
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 33.5731,
      startLng: -7.5898, // Casablanca
      endLat: 41.3851,
      endLng: 2.1734, // Barcelona
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 41.3851,
      startLng: 2.1734, // Barcelona
      endLat: 33.5731,
      endLng: -7.5898, // Casablanca
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 41.3851,
      startLng: 2.1734, // Barcelona
      endLat: 33.5731,
      endLng: -7.5898, // Casablanca
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 33.5731,
      startLng: -7.5898, // Casablanca
      endLat: 51.5074,
      endLng: -0.1278, // London
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 33.5731,
      startLng: -7.5898, // Casablanca
      endLat: 51.5074,
      endLng: -0.1278, // London
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 51.5074,
      startLng: -0.1278, // London
      endLat: 33.5731,
      endLng: -7.5898, // Casablanca
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 51.5074,
      startLng: -0.1278, // London
      endLat: 33.5731,
      endLng: -7.5898, // Casablanca
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* hero */}
      <Wrapper>
        <div className="absolute inset-0  dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

        <Container>
          <div className="flex flex-col items-center justify-center  h-full">
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
                Introducing Astra AI
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>

            <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
              <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                Build your next idea and ship your dream site
              </h1>
              <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                Zero code, maximum speed. Make professional sites easy, fast and
                fun while delivering best-in-class SEO, performance.
              </p>
              <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                <Link
                  href="#"
                  className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
                >
                  <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                    ✨ {"  "} Start building your dream website now!
                  </p>
                  <Button
                    size="sm"
                    className="rounded-full hidden lg:flex border border-foreground/20"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="items-center justify-center md:h-auto  relative w-full">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>

            <div className="relative flex items-center py-10 md:py-20 w-full">
              <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
              <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                <Image
                  src="/assets/dashboard.svg"
                  alt="banner image"
                  width={1200}
                  height={1200}
                  quality={100}
                  className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                />

                <BorderBeam size={250} duration={12} delay={9} />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* how it works */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="The Process" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Three steps to build your dream website
            </h2>
            <p className="text-muted-foreground mt-6">
              Turn your vision into reality in just 3 simple steps
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
                >
                  <div className="flex items-center justify-center">
                    <perk.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {perk.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* features */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Features" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Discover our powerful features
            </h2>
            <p className="text-muted-foreground mt-6">
              Astra offers a range of features to help you build a stunning
              website in no time
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex items-center justify-center mx-auto mt-8">
            <Icons.feature className="w-auto h-80" />
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start lg:items-start px-0 md:px-0"
                >
                  <div className="flex items-center justify-center">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {feature.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* pricing */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Pricing" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Unlock the right plan for your business
            </h2>
            <p className="text-muted-foreground mt-6">
              Choose the best plan for your business and start building your
              dream website today
            </p>
          </div>
        </Container>
        <Container className="flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
            {pricingCards.map((card) => (
              <Card
                key={card.title}
                className={cn(
                  "flex flex-col w-full border-neutral-700",
                  card.title === "Unlimited Saas" && "border-2 border-primary"
                )}
              >
                <CardHeader className="border-b border-border">
                  <span>{card.title}</span>
                  <CardTitle
                    className={cn(
                      card.title !== "Unlimited Saas" && "text-muted-foreground"
                    )}
                  >
                    {card.price}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 fill-primary text-primary" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link
                    href="#"
                    className={cn(
                      "w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium",
                      card.title !== "Unlimited Saas" &&
                        "!bg-foreground !text-background"
                    )}
                  >
                    {card.buttonText}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Wrapper>

      {/* testimonials */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Our Customers" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              What people are saying
            </h2>
            <p className="text-muted-foreground mt-6">
              See how Astra empowers businesses of all sizes. Here&apos;s what
              real people are saying on Twitter
            </p>
          </div>
        </Container>
        <Container>
          <div className="py-10 md:py-20 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee pauseOnHover className="[--duration:20s] select-none">
                {firstRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s] select-none"
              >
                {secondRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* newsletter */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                From Idea to Launch <br /> Faster Than Ever
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Build stunning websites with Astra&apos;s intuitive
                drag-and-drop builder and powerful AI assistant
              </p>
              <Button variant="white" className="mt-6" asChild>
                <Link href="/sign-in">
                  Get started for free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </LampContainer>
        </Container>
        <Container className="relative z-[999999]">
          <div className="flex items-center justify-center w-full -mt-40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
              <div className="flex flex-col items-start gap-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Join our newsletter
                </h4>
                <p className="text-base text-muted-foreground">
                  Be up to date with everything about AI builder
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                <form
                  action="#"
                  className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs"
                >
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="secondary"
                    className="w-full md:w-max"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing you agree with our{" "}
                  <Link href="#">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default HomePage;
