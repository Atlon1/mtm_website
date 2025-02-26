'use client'

import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay } from "swiper/modules";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { portfolioAssetsPL } from "../translations/dataPL";

const PortfolioSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className='h-full'>
                {portfolioAssetsPL.map((portfolio, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col items-center justify-center h-full w-full'>
                            <img className='w-[405px] h-[405px] border border-accent p-10' src={portfolio.src} alt={portfolio.alt} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={5}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className='h-full w-full max-w-[500px]'>
                {portfolioAssetsPL.map((portfolio, index) => (
                    <SwiperSlide key={index}>
                        <div className={`flex flex-col items-center justify-center mt-2 ${index === activeIndex ? 'opacity-100' : 'opacity-40'}`}>
                            <img className='w-[105px] h-[105px]' src={portfolio.src} alt={portfolio.alt} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default PortfolioSlider;
