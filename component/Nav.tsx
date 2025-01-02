'use client'

import {Link as ScrollLink} from 'react-scroll'


const links = [
    {name: 'Home', target: 'home', offset: -100},
    {name: 'About', target: 'about', offset: -80},
    {name: 'Classes', target: 'classes', offset: -80},
    {name: 'Team', target: 'team', offset: 0},
    {name: 'prices', target: 'prices', offset: -40},
    {name: 'Testimonial', target: 'testimonial', offset: 0},
    {name: 'Blog', target: 'blog', offset: 0},
    {name: 'Contact', target: 'contact', offset: -100},
]
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