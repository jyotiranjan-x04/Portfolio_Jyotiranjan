"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { GooeyText } from "./ui/gooey-text";
import { motion, AnimatePresence } from "framer-motion";

export const PreloaderContext = createContext({ isFinished: false });

export function usePreloader() {
  return useContext(PreloaderContext);
}

export function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // 4 words, each takes 1.4s (1s morph + 0.4s cooldown) = ~4.2s
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Wait for the exit animation of preloader to finish (0.8s) before saying isFinished
      setTimeout(() => setIsFinished(true), 800);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PreloaderContext.Provider value={{ isFinished }}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <GooeyText 
              texts={["Build.", "Innovate.", "Grow.", "Scale."]} 
              morphTime={1} 
              cooldownTime={0.4} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </PreloaderContext.Provider>
  );
}
