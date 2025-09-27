"use client";
import { useEffect, useState } from "react";

const ChangingWordHero = () => {
  const words = [
    "Streamer",
    "Friend",
    "Buddy",
    "Gamer",
    "Creator",
    "Companion",
    "Baddie",
    "Helper",
    "Assistant",
    "Wifu",
    "Girlfriend"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
       
      }, 300); // match fade duration
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <h1 className=" text-white text-center relative z-10">
        AI&nbsp;
        <span className="relative inline-block  text-white">
          {/* White text (front layer) */}
          <span className="relative z-10">
            {words[index]}
          </span>

          {/* Gradient shadow behind */}
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 blur-[10px] opacity-100
               bg-[linear-gradient(108deg,#0894FF,#C959DD_34%,#FF2E54_68%,#FF9004)]
               bg-clip-text text-transparent"
          >
            {words[index]}
          </span>
        </span>
        &nbsp;Launchpad
      </h1>
    </>
  );
};

export default ChangingWordHero;
