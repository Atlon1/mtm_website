'use client';
import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {fadeIn} from "../lib/variants";
import {featuresAboutPL} from "../translations/dataPL";
import {featuresAboutENG} from "../translations/dataENG";
import Achivments from "./Achivments";
import {AboutStatsPL} from "../translations/dataPL";
import {AboutStatsENG} from "../translations/dataENG";


const About = () => {

    const [aboutStatsLang, setAboutStatsLang] = useState<string[]>([])
    const [featuresAboutLang, setFeaturesAboutLang] = useState([])

    useEffect(() => {
        if (localStorage.getItem('lang') === null) {
            localStorage.setItem('lang', 'pl')
        }
        if (localStorage.getItem('lang') === 'eng') {
            setAboutStatsLang(AboutStatsENG)
            setFeaturesAboutLang(featuresAboutENG)
        } else {
            setAboutStatsLang(AboutStatsPL)
            setFeaturesAboutLang(featuresAboutPL)
        }
    },[])

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
                       {aboutStatsLang[0]}
                   </motion.h2>
                   <motion.p
                       variants={fadeIn('up', 0.6)}
                       initial='hidden'
                       whileInView='show'
                       viewport={{once: false, amount: 0.2}}
                       className='max-w-[600px] mx-auto text-center'>
                       {aboutStatsLang[1]}
                   </motion.p>
               </div>
               <motion.div
                   variants={fadeIn('up', 0.8)}
                   initial='hidden'
                   whileInView='show'
                   viewport={{once: false, amount: 0.2}}
                   className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'>
                   {featuresAboutLang.map((feature, index) => {
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