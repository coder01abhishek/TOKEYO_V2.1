'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: 'Vision',
    subtitle: 'Vision',
    icon: "/assets/gifs/vision.svg",
  },
  {
    id: 2,
    title: 'Short-Term Memory',
    subtitle: 'Short-term memory specific setting and management',
    icon: "/assets/gifs/shortTerm.svg",
  },
  {
    id: 3,
    title: 'Long-Term Memory',
    subtitle: 'Long-term memory specific settings and management',
    icon: "/assets/gifs/memory.svg",
  },
  {
    id: 4,
    title: 'Discord',
    subtitle: 'Chat & voice chat over Discord',
    icon: "/assets/gifs/discord.svg",
  },
  {
    id: 5,
    title: 'X / Twitter',
    subtitle: 'X / Twitter and other social media',
    icon: "/assets/gifs/x.svg",
  },
];

const UnderDevelopmentSlider = () => {
  return (
    <div className="w-full max-w-full md:max-w-6xl mx-auto text-white">
      <h3 className="text-center mb-2">Under Development</h3>
      <p className="text-center text-[#A0A0A0] mb-8">
        Thinking, vision, speech synthesis, gaming, etc.
      </p>
      <div className="w-full overflow-hidden relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          dir="rtl"
          autoplay={{ 
            delay: 1000, 
            disableOnInteraction: false 
          }}
          speed={2500}
          breakpoints={{
            320: {
              slidesPerView: 1.8,
            },
            480: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper w-full under-development-slider"
        >
          {slides.map(({ id, title, subtitle, icon }) => (
            <SwiperSlide key={id}>
              <div className="backdrop-blur-2xl bg-gradient-to-tl from-white/5 via-white/2 to-transparent border border-[2px] border-gray-600/15 rounded-2xl overflow-hidden p-6 flex flex-col items-center gap-4 min-h-[320px] transition-all duration-300">
                <div className="md:w-[138px] md:h-[138px] w-[98px] h-[98px] flex items-center justify-center">
                  <Image 
                    src={(icon)} 
                    alt={`${title} Icon`} 
                    width={138} 
                    height={138}
                    className="w-full h-full object-contain float-bounce hover:scale-110 hover:rotate-6 transition-all duration-500 ease-out"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-5">{subtitle}</p>
                </div>
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <span className="inline-block border border-yellow-400 text-yellow-400 rounded-full px-3 py-1 text-xs font-semibold tracking-wide hover:bg-yellow-400 hover:text-white transition-all duration-300">
                    IN PROGRESS
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="custom-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center text-white shadow-lg z-10 hover:bg-opacity-90 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="custom-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center text-white shadow-lg z-10 hover:bg-opacity-90 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopmentSlider;
