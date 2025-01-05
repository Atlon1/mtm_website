'use client';

import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../lib/variants";
import {classesVariants} from "../translations/dataPL";

const Classes = () => {
    return (
        <section id='classes'>
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className='grid gird-cols-1 lg:grid-cols-2'>
                {classesVariants.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center'>
                            <div className='bg-black/70 absolute w-full h-full top-0 z-10'></div>
                            <Image src={item.img} alt='image' fill className='object-cover'/>
                            <div
                                className='z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4'>
                                <motion.h3
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once: false, amount: 0.2}}
                                    className='h3 text-accent'>
                                    {item.name}
                                </motion.h3>
                                <motion.p
                                    variants={fadeIn('up', 0.6)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once: false, amount: 0.2}}
                                    className='text-white'>{item.description}</motion.p>
                            </div>
                        </div>
                    )
                })}
            </motion.div>
        </section>
    );
};

export default Classes;