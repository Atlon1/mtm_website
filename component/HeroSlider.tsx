'use client'

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';

import 'swiper/css/pagination';
import CustomButton from "./CustomButton";
import {motion} from 'framer-motion';
import {fadeIn} from "../lib/variants";
import {Autoplay} from "swiper/modules";
import {heroDataPL} from "../translations/dataPL";
import {heroDataENG} from "../translations/dataENG";
import {Link as ScrollLink} from 'react-scroll'
import {useEffect, useState} from "react";

type HeroDataItem = {
    title: string
    subtitle: string
    text: string
}

type HeroData = HeroDataItem[]

const HeroSlider = () => {

 const [HeroDataLang, setHeroDataLang] = useState<HeroData>([])

    useEffect(() => {
        if (localStorage.getItem('lang') === null) {
            localStorage.setItem('lang', 'pl')
        }
        if (localStorage.getItem('lang') === 'eng') {
            setHeroDataLang(heroDataENG)
        } else {
            setHeroDataLang(heroDataPL)
        }
    },[])



    const heroData = localStorage.getItem("lang") === "eng" ? heroDataENG : heroDataPL
    return (
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
            className='h-full'>
            <SwiperSlide>
                <div className='h-full flex justify-end pt-48'>
                    <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
                        <motion.h1
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.2}}
                            className='h1 text-center lg:text-left mb-2'>
                            <span className='text-accent'>{heroData[0].title}</span><br/> {heroData[0].subtitle}
                        </motion.h1>
                        <motion.p
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.2}}
                            className='text-white italic text-center lg:text-left mb-4'>
                            {heroData[0].text}
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.8)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.2}}
                        >
                            <ScrollLink
                                offset={-101}
                                to='contact'
                                smooth
                                spy
                                activeClass='active'
                                className='cursor-pointer hover:text-accent transition-all'
                            >
                                <CustomButton text={heroData[3].title} containerStyles='w-[196px] h-[62px]'/>
                            </ScrollLink>
                        </motion.div>

                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='h-full flex justify-end pt-48'>
                    <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
                        <motion.h1
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.2}}
                            className='h1 text-center lg:text-left mb-2'>
                            <span className='text-accent'>{heroData[1].title}</span> {heroData[1].subtitle}
                        </motion.h1>
                        <motion.p
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.2}}
                            className='text-white italic text-center lg:text-left mb-4'>
                            {heroData[1].text}
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.8)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.2}}
                        >
                            <ScrollLink
                                offset={-101}
                                to='contact'
                                smooth
                                spy
                                activeClass='active'
                                className='cursor-pointer hover:text-accent transition-all'
                            >
                                <CustomButton text={heroData[3].title} containerStyles='w-[196px] h-[62px]'/>
                            </ScrollLink>
                        </motion.div>

                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='h-full flex justify-end pt-48'>
                    <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
                        <motion.h1
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.2}}
                            className='h1 text-center lg:text-left mb-2'>
                            <span className='text-accent'>{heroData[2].title}</span> {heroData[2].subtitle}
                        </motion.h1>
                        <motion.p
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.2}}
                            className='text-white italic text-center lg:text-left mb-4'>
                            {heroData[2].text}
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.8)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.2}}
                        >
                            <ScrollLink
                                offset={-101}
                                to='contact'
                                smooth
                                spy
                                activeClass='active'
                                className='cursor-pointer hover:text-accent transition-all'
                            >
                                <CustomButton text={heroData[3].title} containerStyles='w-[196px] h-[62px]'/>
                            </ScrollLink>
                        </motion.div>

                    </div>
                </div>

            </SwiperSlide>
            {/*<SwiperNavButtons*/}
            {/*    containerStyles='absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1'*/}
            {/*    btnStyles='border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300'*/}
            {/*    iconStyles='text-2xl'/>*/}
        </Swiper>
    );
};

export default HeroSlider;