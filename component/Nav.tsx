'use client'

import {Link as ScrollLink} from 'react-scroll'
import {linksPL} from '../translations/dataPL'
import {linksENG} from '../translations/dataENG'
import {useState, useEffect} from 'react'



const Nav = ({containerStyle}: { containerStyle: string }) => {

    const [linksLang, setLinksLang] = useState([])

    useEffect(() => {
        if (localStorage.getItem('lang') === null) {
            localStorage.setItem('lang', 'pl')
        }
        if (localStorage.getItem('lang') === 'eng') {
            setLinksLang(linksENG)
        } else {
            setLinksLang(linksPL)
        }
    },[])




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