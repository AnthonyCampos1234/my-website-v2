"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Avatar() {
  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.03 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15
          }}
        >
          <div className="absolute inset-0 blur-2xl bg-foreground/5 rounded-full" />
          <Image
            src="/avatar.png"
            alt="Anthony Campos illustration"
            fill
            className="object-contain p-4 select-none drop-shadow-2xl"
            priority
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 