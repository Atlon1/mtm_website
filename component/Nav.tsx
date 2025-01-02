'use client'

import {Link as ScrollLink} from 'react-scroll'
import {links} from '../translations/dataPL'


const Nav = ({containerStyle}: { containerStyle: string }) => {
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