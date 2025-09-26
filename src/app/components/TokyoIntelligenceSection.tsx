'use client';

import React from 'react';
import Image from 'next/image';

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

const TokyoIntelligenceSection = () => {
    const leftPills: PillData[] = [
        { label: 'Models', gif: '/assets/gifs/models.svg', top: 'top-[20%]', mdTop: 'md:top-[70%]', left: 'left-0', mdLeft: 'md:left-[20%]' },
        { label: 'Scene', gif: '/assets/gifs/scene.svg', top: 'top-[45%]', mdTop: 'md:top-[50%]', left: 'left-0', mdLeft: 'md:left-[22%]' },
        { label: 'Modules', gif: '/assets/gifs/modules.svg', top: 'top-[70%]', mdTop: 'md:top-[30%]', left: 'left-0', mdLeft: 'md:left-[25%]' },
    ];

    const rightPills: PillData[] = [
        { label: 'Memory', gif: '/assets/gifs/memory.svg', top: 'top-[20%]', mdTop: 'md:top-[70%]', right: 'right-0', mdRight: 'md:right-[20%]' },
        { label: 'Providers', gif: '/assets/gifs/providers.svg', top: 'top-[45%]', mdTop: 'md:top-[50%]', right: 'right-0', mdRight: 'md:right-[22%]' },
        { label: 'System', gif: '/assets/gifs/system.svg', top: 'top-[70%]', mdTop: 'md:top-[30%]', right: 'right-0', mdRight: 'md:right-[25%]' },
    ];

    const Pill: React.FC<PillProps> = ({ label, gif, isRight = false, className = '' }) => (
        <div
            className={`absolute flex items-center space-x-3 bg-[#FFFFFF1A] rounded-full px-4 py-2 backdrop-blur-sm float-bounce ${className}`}
        >
            {!isRight && <span className="text-sm font-medium">{label}</span>}
            <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full flex-shrink-0">
                <Image
                    src={(gif)}
                    alt={label}
                    width={28}
                    height={28}
                    className="w-7 h-7 float-bounce"
                />
            </span>
            {isRight && <span className="text-sm font-medium">{label}</span>}
        </div>
    );

    return (
        <section
            className="relative mx-auto max-h-[953px] text-white pt-16 mb-16 px-4 select-none bg-cover bg-no-repeat bg-center"
            id="ai"
        >
            <Image
                src={('/assets/images/bg-inte.webp')}
                alt="Tokyo Intelligence GIF"
                fill
                className="w-full h-full object-cover absolute top-0 left-0 z-20"
            />

            <h2 className="text-center text-white sm:mb-34 mb-12">Tokyo Intelligence</h2>

            <div className="relative flex justify-center items-center px-4">
                <div className="absolute inset-0 hidden md:block">
                    {leftPills.map((pill, idx) => (
                        <Pill
                            key={idx}
                            label={pill.label}
                            gif={pill.gif}
                            className={`${pill.mdLeft} ${pill.mdTop}`}
                        />
                    ))}
                </div>

                <div className="absolute inset-0 hidden md:block">
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

                <div className="absolute inset-0 flex md:hidden justify-between sm:items-end items-start sm:px-4">
                    <div className="flex flex-col space-y-4 sm:pt-16 sm:pb-16">
                        {leftPills.slice(0, 3).map((pill, idx) => (
                            <Pill key={idx} label={pill.label} gif={pill.gif} className="relative !left-0 !top-0" />
                        ))}
                    </div>
                    <div className="flex flex-col space-y-4 sm:pt-16 sm:pb-16">
                        {rightPills.slice(0, 3).map((pill, idx) => (
                            <Pill key={idx} label={pill.label} gif={pill.gif} isRight={true} className="relative !right-0 !top-0" />
                        ))}
                    </div>
                </div>

                <div className="relative z-10 sm:w-full w-80 max-w-sm max-h-[450px] sm:max-w-md md:max-w-lg lg:max-w-[580px] mx-auto overflow-hidden">
                    <img src={('/videos/doll.gif')} alt="doll" className="w-full" />
                </div>
            </div>

            <div className="bottom-tabs absolute left-0 right-0 -bottom-10 flex flex-wrap justify-center gap-3 md:gap-6 px-2 md:px-6 overflow-hidden max-w-full mx-auto z-50">
                {bottomTabs.map((tab, idx) => (
                    <button
                        key={idx}
                        className={`
              relative z-10 text-[10px] sm:text-[18px] text-white bg-[#FFFFFF1A]
              px-4 py-3 sm:px-8 md:px-16 md:py-7
              hover:bg-green-700 transition-colors flex-grow-0 min-w-0
              ${idx === 0 ? 'sm:rounded-l-[100px]' : ''}
              ${idx === 2 ? 'sm:rounded-r-[100px]' : ''}
              ${bottomTabs.length === 3 ? (idx === 1 ? 'rounded-none' : '') : ''}
              ${bottomTabs.length !== 3 ? 'rounded-full' : ''}
              sm:rounded-none ${idx === 0 ? 'sm:rounded-l-[100px]' : ''} ${idx === 2 ? 'sm:rounded-r-[100px]' : ''}
            `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="absolute inset-0 pointer-events-none z-1">
                <Image
                    src={('/assets/images/tech-mask.webp')}
                    alt="Particles"
                    fill
                    className="w-full h-full object-cover opacity-20 absolute top-0 left-0 z-2"
                />

            </div>
        </section>
    );
};

export default TokyoIntelligenceSection;
