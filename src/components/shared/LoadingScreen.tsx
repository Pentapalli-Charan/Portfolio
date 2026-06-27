"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const name = "PENTAPALLI CHARAN";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Name reveal */}
            <div className="flex overflow-hidden text-[color:var(--text-primary)]">
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="font-serif text-3xl md:text-5xl font-bold tracking-wider inline-block"
                  style={{
                    minWidth: letter === " " ? "0.5em" : "auto",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="font-accent text-lg italic tracking-wide text-[color:var(--accent)]"
            >
              Portfolio
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="w-48 h-[2px] mt-4 rounded-full overflow-hidden bg-[var(--border)]"
            >
              <motion.div
                className="h-full rounded-full bg-[var(--accent)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
