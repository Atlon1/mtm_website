'use client'

import {Link as ScrollLink} from 'react-scroll'
import {linksPL} from '../translations/dataPL'
import {linksENG} from '../translations/dataENG'
import {useEffect, useState} from "react";


const Nav = ({containerStyle}: { containerStyle: string }) => {


    const [links, setLinks] = useState<any[]>([])

    useEffect(()=>{
        const lang = localStorage.getItem("lang") || "pl";
        const newLinks = lang === "pl" ? linksPL : linksENG;

        if (Array.isArray(newLinks)) {
            setLinks(newLinks);
        } else {
            console.error("Links should be an array, but received:", typeof newLinks);
        }
    },[])

    return (
        <nav className={`${containerStyle}`}>
            {links.map((link, index) => {
                return <ScrollLink
                    offset={link.offset}
                    to={link.target}
                    smooth
                    spy
                    activeClass='active'
                    key={index}
                    className='cursor-pointer hover:text-accent transition-all'
                >
                    {link.name}
                </ScrollLink>
            })}
        </nav>
    );
};

export default Nav;