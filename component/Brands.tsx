"use client";

import { useState, useEffect } from "react";
import { brands } from "../translations/dataPL";
import { motion } from "framer-motion";
import Link from "next/link";
import { brandsDataPl } from "../translations/dataPL";
import { brandsDataENG } from "../translations/dataENG";

const brandContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 0.5,
            ease: "linear",
        },
    },
};

const brandItem = {
    hidden: { y: 20, opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.6, 0.3, 0.8],
        },
    },
};

const Brands = () => {
    const [brandsData, setBrandsData] = useState(brandsDataPl);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const lang = localStorage.getItem("lang") || "pl"; // Domyślny język to "pl"
            setBrandsData(lang === "eng" ? brandsDataENG : brandsDataPl);
        }
    }, []);

    return (
        <section className="py-8" id="brands">
            <motion.div
                variants={brandContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="container mx-auto"
            >
                <h2 className="h2 text-center mb-8">{brandsData.brand}</h2>
                <motion.div
                    variants={brandContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="grid grid-cols-2 lg:grid-cols-4 py-8"
                >
                    {brands.map((item, index) => (
                        <motion.div variants={brandItem} key={index}>
                            <Link
                                className="group grayscale"
                                href="/"
                            >
                                <img className='w-[205px] h-[106px]' src={item.src} alt={item.alt} />

                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Brands;