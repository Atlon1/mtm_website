"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import CustomButton from "./CustomButton";
import { membershipDataPL, membershipData2PL } from "../translations/dataPL";
import { membershipDataENG, membershipData2ENG } from "../translations/dataENG";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const MembershipSlider = () => {
    const [membershipData, setMembershipData] = useState(membershipDataPL);
    const [membershipData2, setMembershipData2] = useState(membershipData2PL);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const lang = localStorage.getItem("lang") || "pl"; // Domyślny język to "pl"
            if (lang === "eng") {
                setMembershipData(membershipDataENG);
                setMembershipData2(membershipData2ENG);
            } else {
                setMembershipData(membershipDataPL);
                setMembershipData2(membershipData2PL);
            }
        }
    }, []);

    return (
        <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            className="min-h-[680px]"
        >
            {membershipData.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
                            <div className="py-5 px-[60px] border-b border-accent">
                                <h4 className="h4">{item.title}</h4>
                            </div>
                            <div className="py-[30px] px-[60px]">
                                <ul className="flex flex-col gap-5 mb-7">
                                    {item.benefits.map((benefit, index) => {
                                        return (
                                            <li key={index} className="flex items-center gap-2">
                                                <span className="text-accent text-lg">{benefit.icon}</span>
                                                {benefit.text}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <p className="text-accent mb-8 flex gap-1 items-center">
                                    <sup className="text-4xl">{membershipData2.value}</sup>
                                    <strong className="text-6xl">{item.Price}</strong>
                                    <em className="self-end text-2xl">{membershipData2.subtitle}</em>
                                </p>
                                <ScrollLink
                                    offset={-101}
                                    to="contact"
                                    smooth
                                    spy
                                    activeClass="active"
                                    className="cursor-pointer hover:text-accent transition-all"
                                >
                                    <CustomButton text={membershipData2.button} containerStyles="w-[196px] h-[60px]" />
                                </ScrollLink>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default MembershipSlider;