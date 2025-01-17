"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import MembershipSlider from "./MembershipSlider";
import { membershipData2PL } from "../translations/dataPL";
import { membershipData2ENG } from "../translations/dataENG";
import { useState, useEffect } from "react";

const MemberShip = () => {
    const [membershipData, setMembershipData] = useState(membershipData2PL); // Domyślnie polski język

    useEffect(() => {
        if (typeof window !== "undefined") {
            const lang = localStorage.getItem("lang") || "pl"; // Domyślny język to "pl"
            setMembershipData(lang === "eng" ? membershipData2ENG : membershipData2PL);
        }
    }, []);

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="py-8 xl:py-0 lg:h-[95vh] bg-membership bg-cover bg-center relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10"
            id="prices"
        >
            <div className="container mx-auto px-0 text-white h-full flex flex-col xl:pt-24 relative z-20">
                <motion.h2
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    className="h2 text-white text-center mb-8"
                >
                    {membershipData.title}
                </motion.h2>
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <MembershipSlider />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default MemberShip;
