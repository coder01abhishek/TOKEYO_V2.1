"use client";
import { useEffect, useRef, useState } from "react";

const Step1 = () => {
  const modules = [
    { id: 1, video: ("/videos/doll2.mp4"), title: "Kai" },
    { id: 2, video: ("/videos/doll.mp4"), title: "Aria" },
    { id: 3, video: ("/videos/doll3.mp4"), title: "Luna" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const [userMoving, setUserMoving] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container || !cursor) return;

    const moduleElements = Array.from(
      container.querySelectorAll<HTMLDivElement>(".module-card")
    );
    if (moduleElements.length === 0) return;

    let index = 0;
    let previousModule: HTMLDivElement | null = null;
    let autoAnimationFrame: number;

   
    const moveToNextModule = () => {
      if (userMoving) return; 
      const target = moduleElements[index];
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const targetX =
        rect.left - containerRect.left + rect.width / 2 - cursor.offsetWidth / 2;
      const targetY =
        rect.top - containerRect.top + rect.height / 2 - cursor.offsetHeight / 2;

     
      previousModule?.classList.remove("auto-hover");
      target.classList.add("auto-hover");
      previousModule = target;

      let progress = 0;
      const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

      const animate = () => {
        progress += 0.05; 
        if (progress > 1) progress = 1;

        cursorPos.current.x = lerp(cursorPos.current.x, targetX, progress);
        cursorPos.current.y = lerp(cursorPos.current.y, targetY, progress);

        cursor.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;

        if (progress < 1 && !userMoving) {
          autoAnimationFrame = requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            index = (index + 1) % moduleElements.length;
            moveToNextModule();
          }, 1000); 
        }
      };

      animate();
    };

    moveToNextModule();

    
    const onMouseMove = (e: MouseEvent) => {
      setUserMoving(true);
      const rect = container.getBoundingClientRect();
      mousePos.current.x = e.clientX - rect.left - cursor.offsetWidth / 2;
      mousePos.current.y = e.clientY - rect.top - cursor.offsetHeight / 2;
    };

    container.addEventListener("mousemove", onMouseMove);

    const animateCursor = () => {
      if (userMoving) {
        const lerpFactor = 0.2;
        cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerpFactor;
        cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerpFactor;
        cursor.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
      }

      requestAnimationFrame(animateCursor);
    };
    animateCursor();
    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(autoAnimationFrame);
    };
  }, [userMoving]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col bg-[#1D1D1D] rounded-2xl p-6 overflow-hidden cursor-none"
    >
      <div
        ref={cursorRef}
        className="absolute w-8 h-8 pointer-events-none z-30"
        style={{
          backgroundImage: `url(${('/assets/images/cursor.webp')})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          transform: "translate(0,0)",
        }}
      ></div>

      <div className="flex justify-center items-center gap-3 sm:pt-16 pt-8">
        {modules.map((module) => (
          <div
            key={module.id}
            className="module-card relative group rounded-xl overflow-hidden border-2 border-transparent hover:scale-110 hover:border-blue-500 transition-all duration-300"
          >
            <video
              src={module.video}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl w-56 h-60 object-cover pointer-events-none"
            />
            <div className="absolute inset-0 flex items-end justify-center">
              <div
                className="overlay w-full text-center py-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(17, 17, 17, 0) 25.17%, #111111 77.42%)",
                }}
              >
                {module.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Step Info */}
      <div className="text-center mt-10">
        <div className="inline-flex items-center gap-2 border border-[#3B82F6] px-5 py-2 rounded-full">
          <span className="w-3 h-3 rounded-full bg-[#3B82F6]"></span>
          <span className="text-white font-semibold">Step 1</span>
        </div>

        <h3 className="text-[32px] text-white mb-3 mt-7">Choose a Character</h3>
        <p className="text-[#A0A0A0] text-[20px]">Start with Aria, Kai, or Luna.</p>
      </div>

      {/* Auto-hover CSS */}
      <style jsx>{`
        .module-card.auto-hover {
          transform: scale(1.1);
          border-color: #3b82f6;
        }
        .module-card.auto-hover .overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Step1;
