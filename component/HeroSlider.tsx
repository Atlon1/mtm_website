'use client'

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

const HeroSlider = () => {
    return (
        <Swiper>
            <SwiperSlide>
                <div className='h-full flex justify-end pt-48'>
                    <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
                        <h1 className='h1 text-center lg:text-left mb-2'>
                            <span>Where hard</span> work meets success
                        </h1>
                        <p className='text-white italic text-center lg:text-left mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <CustomButton text='Get Started' containerStyles='w-[196px] h-[62px]'/>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='h-full flex justify-end pt-48'>
                    <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
                        <h1 className='h1 text-center lg:text-left mb-2'>
                            <span>Where hard</span> work meets success
                        </h1>
                        <p className='text-white italic text-center lg:text-left mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <CustomButton text='Get Started' containerStyles='w-[196px] h-[62px]'/>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperNavButtons containerStyles='' btnStyles='' iconStyles=''/>
        </Swiper>
    );
};

export default HeroSlider;