'use client';

import {brands} from "../translations/dataPL";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {brandsDataPl} from "../translations/dataPL";
import {brandsDataENG} from "../translations/dataENG";


const brandContainerVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 0.5,
            ease: 'linear'
        }
    }
}
const brandItem = {
    hidden:  {
        y: 20, opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25,0.6,0.3,0.8]
        }
    }
}


const Brands = () => {
    const brandsData = localStorage.getItem("lang") === "eng" ? brandsDataENG : brandsDataPl
    return (
        <section className='py-8' id='brands'>
            <motion.div
                variants={brandContainerVariants}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className="conatiner mx-auto">
                <h2 className='h2 text-center mb-8'>{brandsData.brand}</h2>
                <motion.div
                    variants={brandContainerVariants}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className='grid grid-cols-2 lg:grid-cols-4 py-8'>
                    {brands.map((item, index) => {
                        return (
                            <motion.div
                                variants={brandItem}
                                key={index}>
                                <Link
                                    to={item.alt}
                                    className='group grayscale' href={item.alt}>
                                    <Image
                                        className='opacity-50 group-hover:opacity-100 transition-all mx-auto duration-300 h-[80px]'
                                        src={item.src} alt={item.alt} width={205} height={106}/>
                                </Link>
                            </motion.div>

                        )
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Brands;