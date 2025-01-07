'use client';

import Image from "next/image";

import CustomButton from "./CustomButton";
import {membershipData} from "../translations/dataPL";

import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const MembershipSlider = () => {
    return (
        <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{
                clickable: true
            }}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }}
            className='min-h-[680px]'
        >
            {membershipData.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div
                            className='border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto'>
                            <div className='py-5 px-[60px] border-b border-accent'>
                                <h4 className='h4'>{item.title}</h4>
                            </div>
                            <div className='py-[30px] px-[60px]'>
                                <ul className='flex flex-col gap-5 mb-7'>
                                    {item.benefits.map((benefit, index) => {
                                        return (
                                            <li key={index} className='flex items-center gap-2'>
                                                <span className='text-accent text-lg'>{benefit.icon}</span>
                                                {benefit.text}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <p className='text-accent mb-8 flex gap-1 items-center'>
                                    <sup className='text-4xl'>$</sup>
                                    <strong className='text-6xl'>{item.Price}</strong>
                                    <em className='self-end text-2xl'>/hour</em>
                                </p>
                                <CustomButton text='Buy now' containerStyles='w-[196px] h-[60px]'/>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default MembershipSlider;