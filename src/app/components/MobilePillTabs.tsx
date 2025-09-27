"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Pill {
  label: string;
  gif: string;
}

interface MobilePillTabsProps {
  pills: Pill[];
  bottomTabs: string[];
}

export default function MobilePillTabs({ pills, bottomTabs }: MobilePillTabsProps) {
  const [activePillIndex, setActivePillIndex] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto rotate pills
  useEffect(() => {
    const pillInterval = setInterval(() => {
      setActivePillIndex((prev) => (prev + 1) % pills.length);
    }, 3000);
    return () => clearInterval(pillInterval);
  }, [pills.length]);

  // Auto rotate bottom tabs
  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTabIndex((prev) => (prev + 1) % bottomTabs.length);
    }, 4000);
    return () => clearInterval(tabInterval);
  }, [bottomTabs.length]);

  // ScrollTrigger pin (optional)
  useEffect(() => {
    if (sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: false,
        anticipatePin: 1,
      });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-fit flex flex-col items-center justify-center text-white overflow-hidden px-4 py-10 xl:hidden block"
    >
      {/* Background */}
      <Image
        src={("/assets/images/bg-inte.webp")}
        alt="Tokyo Intelligence Background"
        fill
        className="w-full object-cover absolute bottom-0 left-0 z-20"
      />

      {/* Title */}
      <h2 className="text-center text-white mb-32">
        <span className="relative inline-block text-white">
          <span className="relative z-10">Tokyo Intelligence</span>
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 blur-[10px] opacity-100
                       bg-[linear-gradient(108deg,#0894FF,#C959DD_34%,#FF2E54_68%,#FF9004)]
                       bg-clip-text text-transparent"
          >
            Tokyo Intelligence
          </span>
        </span>
      </h2>

      {/* Pills Section */}
      <div className="relative flex justify-center items-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillIndex}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-30"
          >
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 shadow-lg">
              <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full flex-shrink-0">
                <Image
                  src={pills[activePillIndex].gif}
                  alt={pills[activePillIndex].label}
                  width={24}
                  height={24}
                  className="float-bounce"
                />
              </span>
              <span className="font-medium">{pills[activePillIndex].label}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Doll Video */}
        <div className="relative w-full sm:max-w-[350px] md:max-w-[400px] lg:max-w-[495px] mx-auto">
          <video
            src={("/videos/Aiagent.mp4")}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="doll w-full"
          ></video>
        </div>
      </div>

      {/* Bottom Tabs Section */}
      <div className="flex flex-col gap-4 items-center w-full max-w-md z-30 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabIndex}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            <button
              className="
                absolute
                -bottom-0
                px-4 py-3
                bg-white/10 text-white
                rounded-full
                shadow-lg
                backdrop-blur-md
                border border-white/20
                w-full text-center
                font-medium
                z-30
                text-[14px]
              "
            >
              {bottomTabs[activeTabIndex]}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
