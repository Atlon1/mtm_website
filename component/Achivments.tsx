'use client';

import CountUp from "react-countup";
import {achimentsStatsPL} from "../translations/dataPL";
import {achimentsStatsENG} from "../translations/dataENG";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import {useState, useEffect}  from "react";


const statsContainerVariant = {

    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 0.5,
            ease: 'linear'
        }
    }
}

const statsItem = {
    hidden: {y: 20, opacity: 0},
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.6, 0.3, 0.8]
        }
    }
}


const Achivments = () => {

    const [achimentsStatsLang, setAchimentsStatsLang] = useState<string[]>([])

    useEffect(() => {
        if (localStorage.getItem('lang') === null) {
            localStorage.setItem('lang', 'pl')
        }
        if (localStorage.getItem('lang') === 'eng') {
            setAchimentsStatsLang(achimentsStatsENG)
        } else {
            setAchimentsStatsLang(achimentsStatsPL)
        }
    })

    const achimentsStats = localStorage.getItem('lang') === 'pl' ? achimentsStatsPL : achimentsStatsENG
    const ref = useRef()
    const isInView = useInView(ref)

    return (
        <section>
            <div className="conatiner mx-auto">
                <motion.div
                    variants={statsContainerVariant}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: false, amount: 0.5}}
                    className='grid grid-cols-2 md:grid-cols-4 gap-16'>
                    {achimentsStatsLang.map((stat, index)=> {
                        return (
                            <motion.div
                                variants={statsItem}
                                className='flex flex-col justify-center items-center'
                                key={index}>
                                <div
                                    ref={ref}
                                    className='border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6'>
                                    <div

                                        className='border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full'>
                                        {isInView && <CountUp start={0} end={stat.number} duration={6} />}
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center text-center'>
                                    <div className='text-3xl mb-2'>{stat.icon}</div>
                                    <h4 className='h4'>{stat.text}</h4>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Achivments;