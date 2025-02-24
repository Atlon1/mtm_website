'use client';

import Hero from "../component/Hero";
import About from "../component/About";
import Classes from "../component/Classes";
import MemberShip from "../component/MemberShip";

import Brands from "../component/Brands";
import Portfolio from "../component/Portfolio";





export default function Home() {
    return (
        <main>
            <Hero/>
            <About/>
            <Portfolio/>
            <MemberShip/>
            <Brands/>
            <Classes/>
        </main>
    );
}
