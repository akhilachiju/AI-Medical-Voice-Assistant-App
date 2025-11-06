"use client";

import { motion, Target } from "framer-motion";
import React from "react";

interface MotionTextProps {
  text: string;
  className?: string;
  delayStep?: number;
  initial?: Target;
  animate?: Target;
}

export default function MotionText({
  text,
  className,
  delayStep = 0.1,
  initial = { opacity: 0, y: 10, filter: "blur(4px)" },
  animate = { opacity: 1, y: 0, filter: "blur(0px)" },
}: MotionTextProps) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <motion.span  
          key={index}
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3, delay: index * delayStep, ease: "easeInOut" }}
          className={className}
        >
          {word}{" "}
        </motion.span>
      ))}
    </>
  );
}
