"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const cards = ["Customize", "Memory", "Providers", "System"];

const Step2 = () => {

  const [activeIndex, setActiveIndex] = useState(1); // Start with card #2 (Memory)

  // Auto switch active card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2000); // change every 2s
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex items-center bg-[#1D1D1D] rounded-2xl p-6 sm:flex-row flex-col  justify-center">
      {/* Left Side List */}
      <div className="flex flex-col items-center justify-center space-y-4 my-4">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isActive ? 1 : 0.4,
                y: isActive ? 0 : 10,
                scale: isActive ? 1.1 : 0.95,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`w-64 h-12 flex items-center justify-center cursor-pointer
              ${isActive
                  ? "border-2 border-[#3B82F6] text-[#3B82F6] bg-black"
                  : "bg-[#2d2d2d] text-white/70"}
              rounded-[10px] shadow-md`}
            >
              {card}
            </motion.div>
          );
        })}
      </div>

      {/* Right Side Step Info */}
      <div className="text-center sm:text-left sm:px-none px-6 sm:pb-none pb-6">
        <div className="inline-flex items-center gap-2 border border-[#3B82F6] px-5 py-2 rounded-full">
          <span className="w-3 h-3 rounded-full bg-[#3B82F6]"></span>
          <span className="text-white font-semibold">
            Step 2
          </span>
        </div>

        <h3 className="text-[32px] text-white mb-3 mt-7">
          {/* {items[nextIndex]} */}
          Customize
        </h3>
        <p className="text-[#A0A0A0] text-[20px]">
          Adjust modules, memory, and voices.
        </p>
      </div>
    </div>
  );
};

export default Step2;