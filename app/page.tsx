'use client';

import Hero from "../component/Hero";
import About from "../component/About";
import Classes from "../component/Classes";
import MemberShip from "../component/MemberShip";

import Brands from "../component/Brands";


export default function Home() {
    return (
        <main>
            <Hero/>
            <About/>
            <Classes/>
            <Brands/>
            <MemberShip/>
            {/*<div className='h-[3000px]'></div>*/}
        </main>
    );
}
