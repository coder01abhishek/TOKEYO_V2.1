'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [
   {
        id: 1,
        title: 'English',
        subtitle: 'English prompts',
        icon: (
            <Image
                src={("/assets/images/eng.webp")}
                alt="eng"
                width={100}
                height={60}
            />
        ),
    },
    {
        id: 2,
        title: '西班牙语提示',
        subtitle: '简体中文提示',
        icon: (
            <Image
                src={("/assets/images/简体中文提示.webp")}
                alt="Chinese Icon"
                width={100}
                height={60}
            />
        ),
    },
    {
        id: 3,
        title: 'Española',
        subtitle: 'indicaciones en español',
        icon: (
            <Image
                src={("/assets/images/epanola.webp")}
                alt="Spanish Icon"
                width={100}
                height={60}
            />
        ),
    },
    {
        id: 4,
        title: 'Tiếng Việt',
        subtitle: 'Lời nhắc tiếng Việt',
        icon: (
            <Image
                src={("/assets/images/tie.webp")}
                alt="Vietnamese Icon"
                width={100}
                height={60}
            />
        ),
    },
    {
        id: 5,
        title: 'Русский',
        subtitle: 'Русские подсказки',
        icon: (
            <Image
                src={("/assets/images/pycc.webp")}
                alt="Russian Icon"
                width={100}
                height={60}
            />
        ),
    },
];

const Language = () => {
    return (
        <div className='bg-[#000000] sm:pt-30 sm:pb-48 pt-16 pb-16 sm:min-h-screen'>
            <div className="w-full max-w-full md:max-w-6xl mx-auto text-white">
                <h2 className="text-center mb-2 max-w-[880px] mx-auto mb-4 ms:px-0 px-4">Advanced Multilingual AI Processing Engine</h2>
                <p className="text-center text-[#A0A0A0] mb-8 max-w-[761px] mx-auto sm:mb-22 ms:px-0 px-4">
                    Our neural language processing system seamlessly understands and responds in English, Simplified Chinese, Traditional Chinese, Vietnamese, Spanish, and Russian - breaking down language barriers for truly global AI interactions.
                </p>
                {/* Mobile Slider */}
                <div className="block md:hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        speed={1000}
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.8,
                            },
                            480: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3.5,
                            }
                        }}
                        // pagination={{ clickable: true }}
                        loop={true}
                        className="mySwiper w-full"
                    >
                        {modules.map(({ id, title, subtitle, icon }) => (
                            <SwiperSlide key={id}>
                                <div className="backdrop-blur-2xl bg-gradient-to-tl from-white/5 via-white/2 to-transparent border border-[2px] border-gray-600/15 rounded-2xl  overflow-hidden
   flex flex-col items-center  gap-4 min-h-[280px]">
                                    <div className="w-[98px]  mt-10 h-[98px] flex items-center justify-center">{icon}</div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-lg mb-2">{title}</h3>
                                        <p className="text-sm text-[#A0A0A0] leading-5">{subtitle}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop and Tablet Layout */}
                <div className="hidden md:block">
                    {modules.length > 3 ? (
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            autoplay={{
                                delay: 500,
                                disableOnInteraction: false
                            }}
                            speed={1000}
                            spaceBetween={20}
                            slidesPerView={4}
                            loop={true}
                            className="mySwiper w-full"
                        >
                            {modules.map(({ id, title, subtitle, icon }) => (
                                <SwiperSlide key={id}>
                                    <div className="backdrop-blur-2xl bg-gradient-to-tl from-white/5 via-white/2 to-transparent border border-[2px] border-gray-600/15 rounded-2xl  overflow-hidden
   flex flex-col items-center  gap-4 sm:min-h-[286px] min-h-[280px]">
                                        <div className="h-[100px] w-[100px] mt-10 flex items-center justify-center">{icon}</div>
                                        <div className="text-center">
                                            <h3 className="font-bold text-lg mb-2">{title}</h3>
                                            <p className="text-sm text-[#A0A0A0] leading-5">{subtitle}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="flex justify-center gap-8">
                            {modules.map(({ id, title, subtitle, icon }) => (
                                <div
                                    key={id}
                                    className="backdrop-blur-2xl bg-gradient-to-tl from-white/5 via-white/2 to-transparent border border-[2px] border-gray-600/15 rounded-2xl  overflow-hidden
  p-6 flex flex-col items-center gap-4 min-w-[300px] min-h-[250px]"
                                >
                                    <div className="h-[100px]  mt-10 w-[100px] flex items-center justify-center">{icon}</div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-lg mb-2">{title}</h3>
                                        <p className="text-sm text-[#A0A0A0] leading-5">{subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Language;
