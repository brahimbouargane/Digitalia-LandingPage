"use client";

import { useEffect, useState } from "react";
import { World } from "./globe";

export const GlobeWrapper = ({ data, globeConfig }: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[600px]" />;
  }

  return <World data={data} globeConfig={globeConfig} />;
};
