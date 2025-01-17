'use client'

import {Link as ScrollLink} from 'react-scroll'
import {linksPL} from '../translations/dataPL'
import {linksENG} from '../translations/dataENG'
import {useState, useEffect} from 'react'

type linksType = {
    name: string
    target: string
    offset: number
}

const Nav = ({containerStyle}: { containerStyle: string }) => {

    const [linksLang, setLinksLang] = useState<linksType[]>([])

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Kod poniżej wykona się tylko w przeglądarce
            const lang = localStorage.getItem("lang") || "pl";
            localStorage.setItem("lang", lang);
            setLinksLang(lang === "eng" ? linksENG : linksPL);
        }
    }, []);




    return (
        <nav className={`${containerStyle}`}>
            {linksLang.map((link, index) => {
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