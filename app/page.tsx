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
            <MemberShip/>
            <Brands/>
            <Classes/>
        </main>
    );
}
