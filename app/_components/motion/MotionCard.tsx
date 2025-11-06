"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export default function MotionWrapper({
  children,
  className,
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  whileHover,
  viewport = { once: true },
  ...rest
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      transition={transition}
      viewport={viewport}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
