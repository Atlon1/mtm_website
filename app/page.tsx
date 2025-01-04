'use client';

import Hero from "../component/Hero";
import About from "../component/About";
import Classes from "../component/Classes";
import Team from "../component/Team";
import MemberShip from "../component/MemberShip";
import Testimonial from "../component/Testimonial";
import Blog from "../component/Blog";
import Brands from "../component/Brands";


export default function Home() {
    return (
        <main>
            <Hero/>
            <About/>
            <Classes/>
            <Team/>
            <MemberShip/>
            <Testimonial/>
            <Blog/>
            <Brands/>
            {/*<div className='h-[3000px]'></div>*/}
        </main>
    );
}
