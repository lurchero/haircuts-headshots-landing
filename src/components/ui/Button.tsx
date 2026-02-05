"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variants = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-800",
  secondary: "bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-50",
  ghost: "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  style={{ display: "inline-block" }}
>
  <button
    className={cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
      variants[variant],
      sizes[size],
      className
    )}
    {...props}
  >
    {children}
  </button>
</motion.div>

  );
}
