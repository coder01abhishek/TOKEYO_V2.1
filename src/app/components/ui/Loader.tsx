// components/Loader.tsx
"use client";
import React, { useEffect } from "react";

interface LoaderProps {
  size?: number;
  progress?: number;
}

const Loader: React.FC<LoaderProps> = ({ progress = 0 }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-[#000101] fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative flex flex-col items-center space-y-4">

        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gray-400 via-gray-300 to-white rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-white text-sm font-medium">
          Loading... {Math.round(progress)}%
        </p>
        <p className="text-gray-300 mt-6 text-center px-4 text-sm font-light tracking-wide max-w-sm leading-relaxed">Kindly let the website load completely for a premium user experience</p>
      </div>
    </div>
  );
};

export default Loader;
