"use client";

import { useRef, useMemo, memo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  className?: string;
}

// Fixed projectPoint function to maintain correct coordinates
const projectPoint = (lat: number, lng: number) => {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
};

const createCurvedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number }
) => {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 50;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
};

// Memoized Point component with pulse animation
const LocationPoint = memo(
  ({ x, y, lineColor }: { x: number; y: number; lineColor: string }) => (
    <g>
      <circle cx={x} cy={y} r="2" fill={lineColor} />
      <circle cx={x} cy={y} r="2" fill={lineColor} opacity="0.5">
        <animate
          attributeName="r"
          from="2"
          to="8"
          dur="1.5s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="0.5"
          to="0"
          dur="1.5s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  )
);
LocationPoint.displayName = "LocationPoint";

// Memoized Path component
const AnimatedPath = memo(
  ({
    path,
    lineColor,
    delay,
  }: {
    path: string;
    lineColor: string;
    delay: number;
  }) => (
    <motion.path
      d={path}
      fill="none"
      stroke="url(#path-gradient)"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 1,
        delay: 0.5 * delay,
        ease: "easeOut",
      }}
    />
  )
);
AnimatedPath.displayName = "AnimatedPath";

export const WorldMap = memo(
  ({ dots = [], lineColor = "#de9d56", className }: MapProps) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const { theme } = useTheme();

    // Memoize map generation
    const svgMap = useMemo(() => {
      const map = new DottedMap({ height: 100, grid: "diagonal" });
      return map.getSVG({
        radius: 0.22,
        color: theme === "light" ? "#FFFFFF40" : "#FFFFFF40",
        shape: "circle",
      });
    }, [theme]);

    // Memoize paths and points calculations
    const { paths, points } = useMemo(() => {
      const paths = dots.map((dot) => {
        const startPoint = projectPoint(dot.start.lat, dot.start.lng);
        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
        return createCurvedPath(startPoint, endPoint);
      });

      const points = dots.map((dot) => ({
        start: projectPoint(dot.start.lat, dot.start.lng),
        end: projectPoint(dot.end.lat, dot.end.lng),
      }));

      return { paths, points };
    }, [dots]);

    return (
      <div className="w-full aspect-[2/1] bg-transparent rounded-lg relative font-sans">
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
          alt="world map"
          height={495}
          width={1056}
          draggable={false}
          priority={false}
        />
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
        >
          <defs>
            <linearGradient
              id="path-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {paths.map((path, i) => (
            <AnimatedPath
              key={`path-${i}`}
              path={path}
              lineColor={lineColor}
              delay={i}
            />
          ))}

          {points.map((point, i) => (
            <g key={`points-${i}`}>
              <LocationPoint
                x={point.start.x}
                y={point.start.y}
                lineColor={lineColor}
              />
              <LocationPoint
                x={point.end.x}
                y={point.end.y}
                lineColor={lineColor}
              />
            </g>
          ))}
        </svg>
      </div>
    );
  }
);

WorldMap.displayName = "WorldMap";
