"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdMenu } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { GB, PL } from 'country-flag-icons/react/3x2';
import { FaRegClock } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsTelephoneForward } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    const [headerActive, setHeaderActive] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [langActive, setLangActive] = useState(false);
    const [lang, setLang] = useState('pl');

    useEffect(() => {
        if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', 'pl');
        }
    }, []);

    useEffect(() => {
        if (!localStorage.getItem('active')) {
            localStorage.setItem('active', 'false');
        }
    }, []);

    useEffect(() => {
        const html = document.querySelector('html');
        const storedLang = localStorage.getItem('lang');

        if (storedLang === 'eng' && localStorage.getItem('active') === "false") {
            html?.classList.add('eng');
            setLang('eng');
            setLangActive(true);
        } else {
            html?.classList.remove('eng');
            setLang('pl');
            setLangActive(false);
        }
    }, [lang]);

    const handleSwitchENG = () => {
        if (lang === 'pl') {
            setLang('eng');
            localStorage.setItem('lang', 'eng');
        }
        window.location.reload();
    };

    const handleSwitchPL = () => {
        if (lang === 'eng') {
            setLang('pl');
            localStorage.setItem('lang', 'pl');
        }
        window.location.reload();
    };

    useEffect(() => {
        const handleScroll = () => {
            setHeaderActive(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`${headerActive ? 'h-[80px]' : 'h-[120px]'} fixed max-w-[1920px] top-0 w-full bg-primary-200 transition-all z-50`}>
            <div
                className={`${headerActive ? 'hidden' : 'h-[30px]'} flex items-center justify-between border-accent border-b w-full p-2 text-white text-sm transition-all duration-300`}>
                <div className='flex flex-row gap-4 items-center'>
                    <Link className='text-accent hover:text-white transition-all duration-300' href='tel:+48690544645'>
                        <BsTelephoneForward />
                    </Link>
                    <Link href='tel:+48690544645' className='xl:flex hidden hover:text-accent transition-all duration-300'>
                        690544645
                    </Link>
                    <Link href='mailto:mtm.biuro.solution@gmial.com' className='text-accent hover:text-white transition-all duration-300'>
                        <MdOutlineAlternateEmail />
                    </Link>
                    <Link href='mailto:mtm.biuro.solution@gmial.com' className='xl:flex hidden hover:text-accent transition-all duration-300'>
                        mtm.biuro.solution@gmial.com
                    </Link>
                    <div className='xl:flex hidden flex-row gap-4 items-center'>
                        <FaRegClock className='text-accent' />
                        <div>Pon - PT 8:00 - 22:00</div>
                    </div>
                </div>
                <div className='flex flex-row gap-4 items-center'>
                    <Link href='https://www.facebook.com/'>
                        <FaFacebook className='text-accent hover:text-white transition-all cursor-pointer duration-300' />
                    </Link>
                    <Link href='https://www.linkedin.com/'>
                        <FaLinkedin className='text-accent hover:text-white transition-all cursor-pointer duration-300' />
                    </Link>
                    <Link href='https://www.youtube.com/'>
                        <FaYoutube className='text-accent hover:text-white transition-all cursor-pointer duration-300' />
                    </Link>
                </div>
            </div>
            <div className="container mx-auto h-full flex items-center justify-between">
                <ScrollLink
                    offset={-101}
                    to='home'
                    smooth
                    spy
                    activeClass='active'
                    className='cursor-pointer hover:text-accent transition-all'>
                    <img src='/assets/img/mtm.svg' alt='Logo' className='w-[140px] h-[100px]'/>
                </ScrollLink>
                <MobileNav
                    containerStyle={`${headerActive ? 'top-[80px]' : 'top-[120px]'} ${openNav ? 'max-h-max pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'} text-white flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 top-[120px] text-base uppercase font-medium transition-all xl:hidden`}
                    closeNav={(value) => setOpenNav(value)} />
                <Nav containerStyle='flex gap-4 text-white hidden xl:flex uppercase' />
                <div className='flex items-center gap-4'>
                    <div className='text-white flex items-center gap-2'>
                        <button
                            onClick={handleSwitchPL}
                            className='flex items-center gap-2 hover:text-accent transition-all text-base uppercase font-medium'>
                            pl
                            <PL className='w-[20px] h-[20px]' title='Poland' />
                        </button>
                        <button
                            onClick={handleSwitchENG}
                            className='flex items-center gap-2 hover:text-accent transition-all text-base uppercase font-medium'>
                            eng
                            <GB className='w-[20px] h-[20px]' title='United Kingdom' />
                        </button>
                    </div>
                    <button onClick={() => setOpenNav(!openNav)} className='text-white xl:hidden transition-all duration-300'>
                        {openNav ? <AiOutlineClose className='text-4xl' /> : <MdMenu className='text-4xl' />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
