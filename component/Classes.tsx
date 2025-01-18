"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import { classesVariantsPL } from "../translations/dataPL";
import { classesVariantsENG } from "../translations/dataENG";

const Classes = () => {
    const [classesVariants, setClassesVariants] = useState(classesVariantsPL);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const lang = localStorage.getItem("lang") || "pl"; // Domyślny język to "pl"
            setClassesVariants(lang === "eng" ? classesVariantsENG : classesVariantsPL);
        }
    }, []);

    return (
        <section id="classes">
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2"
            >
                {classesVariants.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
                        >
                            <div className="bg-black/70 absolute w-full h-full top-0 z-10"></div>

                            <img
                                src={item.img}
                                alt={item.name}
                                className="absolute w-full h-full object-cover"
                            />
                            <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                                <motion.h3
                                    variants={fadeIn("up", 0.4)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="h3 text-accent"
                                >
                                    {item.name}
                                </motion.h3>
                                <motion.p
                                    variants={fadeIn("up", 0.6)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="text-white"
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Classes;
