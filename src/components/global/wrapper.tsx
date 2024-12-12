import React from "react";
import { cn } from "@/src/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const Wrapper = ({ children, className, id }: Props) => {
  return (
    <div
      className={cn("h-full mx-auto w-full max-w-screen-2xl px-4 ", className)}
      id={id}
    >
      {children}
    </div>
  );
};

export default Wrapper;
