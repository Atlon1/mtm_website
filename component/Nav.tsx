'use client'

import {Link as ScrollLink} from 'react-scroll'
import {linksPL} from '../translations/dataPL'
import {linksENG} from '../translations/dataENG'


const Nav = ({containerStyle}: { containerStyle: string }) => {


    const links = localStorage.getItem('lang') === 'eng' ? linksENG : linksPL

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