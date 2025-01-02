"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect} from "react";

const Header = () => {
    const[headerActive, setHeaderActive] = useState(false);

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
        <header className={`${headerActive ? 'h-[100px]' : 'h-[124px]'} fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[100px] transition-all z-50`}>
            <div className="container mx-a h-full flex items-center justify-between">
                <Link href=''>
                    <Image src={'/assets/img/Logo_bezTła.png'} width={200} height={70} alt='Logo'/>
                </Link>
                <MobileNav containerStyle='text-white xl:hidden'/>
                <Nav containerStyle='flex gap-4 text-white hidden xl:flex'/>
            </div>
        </header>
    );
};

export default Header;