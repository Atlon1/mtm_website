"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect} from "react";
import {MdMenu} from 'react-icons/md';
import {GB, PL} from 'country-flag-icons/react/3x2'
import {FaRegClock} from 'react-icons/fa'



const Header = () => {
    const [headerActive, setHeaderActive] = useState(false);
    const [openNav, setOpenNav] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setHeaderActive(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header
            className={`${headerActive ? 'h-[130px]' : 'h-[144px]'} fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[140px] transition-all z-50`}>
            <div className='flex items-center justify-between border-accent border-b w-full p-2 text-white h-[30px] text-sm'>
               <div className='flex flex-row gap-4 items-center'>
                   <Link href='tel:+48690544645' >690544645</Link>
                   <Link href='email:mtm.biuro.solution@gmial.com' >mtm.biuro.solution@gmial.com</Link>
                   <FaRegClock className='text-accent'/><div> Pon - PT 8:00 - 22:00</div>
               </div>
                <div className='flex flex-row'>
                    <div>facebook</div>
                    <div>instagram</div>
                    <div>youtube</div>
                </div>

            </div>
            <div className="container mx-a h-full flex items-center justify-between">
                <Link href=''>
                    <Image src={'/assets/img/Logo_bezTła.png'} width={180} height={70} alt='Logo'/>
                </Link>
                <MobileNav
                    containerStyle={`${headerActive ? 'top-[130px]' : 'top-[144px]'} ${openNav ? 'max-h-max pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'} text-white flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 top-[124px] text-base uppercase font-medium transition-all xl:hidden`}/>
                <Nav containerStyle='flex gap-4 text-white hidden xl:flex'/>
                <div className='flex items-center gap-4'>
                    <div className='text-white flex items-center gap-2'>
                        <button
                            className='flex items-center gap-2 hover:text-accent transition-all text-base uppercase font-medium '>
                            pl
                            <PL
                                className='w-[20px] h-[20px]'
                                title='Poland'/>
                        </button>
                        <button className='flex items-center gap-2 hover:text-accent transition-all text-base uppercase font-medium'>
                            eng
                            <GB
                            title='United Kingdom'
                            className='w-[20px] h-[20px]'
                            />
                        </button>
                    </div>
                    <button onClick={() => setOpenNav(!openNav)} className='text-white xl:hidden'>
                        <MdMenu className='text-4xl'/>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;