import {linksPL} from "../translations/dataPL";
import {linksENG} from "../translations/dataENG";
import {Link as ScrollLink} from "react-scroll/modules";
import {useMediaQuery} from "react-responsive";
import {useEffect, useState} from "react";

const MobileNav = ({containerStyle, closeNav}: { containerStyle: string , closeNav: any }) => {
    const isMobile = useMediaQuery({
        query: '(max-width: 640px)'
    })

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
                    activeClass={`${isMobile && 'active'}`}
                    key={index}
                    className='cursor-pointer hover:text-accent transition-all'
                    onClick={() => closeNav(false)}
                >
                    {link.name}
                </ScrollLink>
            })}
        </nav>
    );
};

export default MobileNav;