"use client";

import { motion, Target, Transition, HTMLMotionProps } from "framer-motion";
import React from "react";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  initial?: Target;
  animate?: Target;
  whileHover?: HTMLMotionProps<"div">["whileHover"];
  transition?: Transition;
  viewport?: HTMLMotionProps<"div">["viewport"];
}

export default function MotionWrapper({
  children,
  className,
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  whileHover,
  viewport = { once: true },
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
