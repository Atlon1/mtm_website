'use client';

import {motion} from "framer-motion";
import {fadeIn} from "../lib/variants";
import {featuresAbout} from "../translations/dataPL";
import Interceptors from "undici-types/interceptors";
import Achivments from "./Achivments";



const About = () => {
    return (
        <section className='pt-8 pb14 lg:pt-16 lg:pb-28 pb-12' id='about'>
           <div className='container mx-auto'>
               <div className='flex flex-col items-center gap-2 mb-8'>
                   <motion.h2
                       variants={fadeIn('up', 0.4)}
                       initial='hidden'
                       whileInView='show'
                       viewport={{once: false, amount: 0.2}}
                       className='h2 text-center'>
                       About us
                   </motion.h2>
                   <motion.p
                       variants={fadeIn('up', 0.6)}
                       initial='hidden'
                       whileInView='show'
                       viewport={{once: false, amount: 0.2}}
                       className='max-w-[600px] mx-auto text-center'>
                       We are a young company, but the people who work within the structure have many years of experience in the industry. We do the following types of processing: Milling, Turning, Grinding.
                   </motion.p>
               </div>
               <motion.div
                   variants={fadeIn('up', 0.8)}
                   initial='hidden'
                   whileInView='show'
                   viewport={{once: false, amount: 0.2}}
                   className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'>
                   {featuresAbout.map((feature, index) => {
                    return (
                        <div className='flex flex-col justify-center items-center gap-4 border p-10' key={index}>
                            <div className='text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center'>{feature.icon}</div>
                            <div className='flex flex-col items-center justify-center gap-2 text-center'>
                                <h4 className='h4 text-accent'>{feature.title}</h4>
                                <p>{feature.subtitle}</p>
                            </div>
                        </div>
                    )
                   })}
               </motion.div>
                <Achivments/>
           </div>
        </section>
    );
};

export default About;