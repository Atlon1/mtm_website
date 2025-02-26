import React, {useEffect, useState} from 'react';
import {portfolioPl} from "../translations/dataPL";
import {portfolioENG} from "../translations/dataENG";
import PortfolioSlider from "./PortfolioSlider";
import {fadeIn} from "../lib/variants";
import {motion} from 'framer-motion';


const Portfolio = () => {
  const [portfolioLang, setPortfolioLang] = useState("");


    useEffect(() => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem('lang') === null) {
                localStorage.setItem('lang', 'pl');

            }
            if (localStorage.getItem('lang') === 'eng') {
                setPortfolioLang(portfolioENG);
            } else {
                setPortfolioLang(portfolioPl);
            }
        }
    }, []);

    return (
        <section className='pt-8 pb14 lg:pt-16 lg:pb-28 pb-12 bg-primary-300' id='portfolio'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center gap-2 mb-8'>
                    <motion.h2 className='h2 text-center text-white'
                               variants={fadeIn('up', 0.4)}
                               initial='hidden'
                               whileInView={'show'}
                               viewport={{once: false, amount: 0.2}}
                    >
                        {portfolioLang}
                    </motion.h2>
                    <motion.div className='h-full w-full'
                                variants={fadeIn('up', 0.6)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{once: false, amount: 0.2}}>
                        <PortfolioSlider/>
                    </motion.div>

                </div>
            </div>

        </section>
    );
};

export default Portfolio;