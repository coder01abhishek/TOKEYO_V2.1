'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const bottomTabs = [
    'Construct Behavioral Architecture',
    'Fuse Personality with Digital Embodiment',
    'Deploy Agent into Immersive Ecosystems',
];

interface PillData {
    label: string;
    gif: string;
    top: string;
    mdTop: string;
    left?: string;
    mdLeft?: string;
    right?: string;
    mdRight?: string;
}

interface PillProps {
    label: string;
    gif: string;
    isRight?: boolean;
    className?: string;
}

const NewAiAnimate = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const leftPillsRef = useRef<HTMLDivElement>(null);
    const rightPillsRef = useRef<HTMLDivElement>(null);
    const bottomTabsRef = useRef<HTMLDivElement>(null);

    const leftPills: PillData[] = [
        { label: 'Models', gif: '/assets/gifs/models.svg', top: 'top-[20%]', mdTop: 'md:top-[50%]', left: 'left-0', mdLeft: 'md:left-[20%]' },
        { label: 'Scene', gif: '/assets/gifs/scene.svg', top: 'top-[45%]', mdTop: 'md:top-[35%]', left: 'left-0', mdLeft: 'md:left-[25%]' },
        { label: 'Modules', gif: '/assets/gifs/modules.svg', top: 'top-[70%]', mdTop: 'md:top-[20%]', left: 'left-0', mdLeft: 'md:left-[30%]' },
    ];

    const rightPills: PillData[] = [
        { label: 'Memory', gif: '/assets/gifs/memory.svg', top: 'top-[20%]', mdTop: 'md:top-[50%]', right: 'right-0', mdRight: 'md:right-[20%]' },
        { label: 'Providers', gif: '/assets/gifs/providers.svg', top: 'top-[45%]', mdTop: 'md:top-[35%]', right: 'right-0', mdRight: 'md:right-[25%]' },
        { label: 'System', gif: '/assets/gifs/system.svg', top: 'top-[70%]', mdTop: 'md:top-[20%]', right: 'right-0', mdRight: 'md:right-[30%]' },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set('.left-pill', { x: -200, scale: 0, opacity: 0 });
            gsap.set('.right-pill', { x: 200, scale: 0, opacity: 0 });
            gsap.set('.doll', { scale: 0, opacity: 0 });
            gsap.set('.bottom-tab', { y: 50, opacity: 0 });
            gsap.set('.gradient-overlay', { x: '-100%', opacity: 0 });

            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=1500",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    markers: false, 
                }
            });

            
            tl.fromTo('.doll', { y: 300, scale: 0.8, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 1 }, 0);

            tl.to('.bottom-tab', { y: 0, opacity: 1, stagger: 0.2, duration: 1 }, 0.5);

            tl.to('.left-pill', { x: 0, scale: 1, opacity: 1, stagger: 0.3, duration: 1 }, 1);
            tl.to('.right-pill', { x: 0, scale: 1, opacity: 1, stagger: 0.3, duration: 1 }, 1);

            tl.to('.gradient-overlay', { x: '100%', opacity: 1, duration: 1.5 }, 2);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const Pill: React.FC<PillProps> = ({ label, gif, isRight = false, className = '' }) => (
        <div
            className={`pill ${isRight ? 'right-pill' : 'left-pill'} absolute flex items-center space-x-3 bg-[#FFFFFF1A] rounded-full px-5 py-2 backdrop-blur-sm ${className}`}
        >
            {!isRight && <span className="text-sm font-medium pr-2">{label}</span>}
            <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full flex-shrink-0">
                <Image
                    src={(gif)}
                    alt={label}
                    width={28}
                    height={28}
                    className="w-7 h-7 float-bounce-min hover:scale-110 hover:rotate-12 transition-all duration-300 ease-out"
                />
            </span>
            {isRight && <span className="text-sm font-medium pl-2">{label}</span>}
        </div>
    );

    return (
        <section
            ref={sectionRef}
            className="relative mx-auto text-white pt-32 px-4 select-none bg-cover overflow-hidden max-h-screen xl:block hidden"


        >
            <Image src={("/assets/images/bg-inte.webp")} alt="Tokyo Intelligence GIF" fill className='w-full object-cover absolute bottom-0 left-0 z-20' />
            <h2 className="text-center text-white mb-28">
                <span className="relative inline-block  text-white">
                    <span className="relative z-10">
                        Tokyo Intelligence
                    </span>

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

            <div className="relative flex justify-center items-center px-4 h-full max-w-[1300px] mx-auto">

                <div ref={leftPillsRef} className="absolute inset-0 hidden md:block z-20">
                    {leftPills.map((pill, idx) => (
                        <Pill
                            key={idx}
                            label={pill.label}
                            gif={pill.gif}
                            className={`${pill.mdLeft} ${pill.mdTop}`}
                        />
                    ))}
                </div>

                <div ref={rightPillsRef} className="absolute inset-0 hidden md:block z-20">
                    {rightPills.map((pill, idx) => (
                        <Pill
                            key={idx}
                            label={pill.label}
                            gif={pill.gif}
                            isRight={true}
                            className={`${pill.mdRight} ${pill.mdTop}`}
                        />
                    ))}
                </div>

                <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[495px] mx-auto h-[625px]">
                    <video src={("/videos/Aiagent.mp4")} autoPlay loop muted className='doll'></video>
                </div>
            </div>

            <div
                ref={bottomTabsRef}
                className="bottom-tabs absolute bottom-0 z-30 left-0 right-0 flex flex-wrap justify-center gap-3 md:gap-6 px-2 md:px-6 overflow-hidden max-w-full mx-auto"
            >
                {bottomTabs.map((tab, idx) => (
                    <button
                        key={idx}
                        className={`bottom-tab
                            relative z-10 text-[10px] font-medium sm:text-[18px] text-white bg-[#FFFFFF1A]
                            px-4 py-3 sm:px-8 md:px-16 md:py-4
                            hover:bg-green-700 transition-colors flex-grow-0 min-w-0
                            ${idx === 0 ? "rounded-l-[100px] " : ""}
                            ${idx === 2 ? "rounded-r-[100px] " : ""}
                            ${bottomTabs.length === 3 ? (idx === 1 ? 'rounded-[10px]' : '') : ''}
                            ${bottomTabs.length !== 3 ? 'rounded-full' : ''}
                            sm:rounded-[10px] ${idx === 0 ? "sm:rounded-l-[100px] sm:rounded-r-[10px]" : ""} ${idx === 2 ? "sm:rounded-r-[100px] sm:rounded-l-[10px]" : ""}
                        `}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default NewAiAnimate;

