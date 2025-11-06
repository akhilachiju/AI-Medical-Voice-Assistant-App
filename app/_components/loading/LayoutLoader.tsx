"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "@/app/_components/loading/LoadingSpinner";

interface LayoutLoaderProps {
  children: React.ReactNode;
  text?: string;
  delay?: number; 
}

export default function LayoutLoader({
  children,
  text = "Loading...",
  delay = 1200,
}: LayoutLoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (loading) return <LoadingSpinner text={text} />;

  return <>{children}</>;
}
