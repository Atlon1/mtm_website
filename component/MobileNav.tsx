import {linksPL} from "../translations/dataPL";
import {linksENG} from "../translations/dataENG";
import {Link as ScrollLink} from "react-scroll/modules";
import {useMediaQuery} from "react-responsive";

const MobileNav = ({containerStyle, closeNav}: { containerStyle: string , closeNav: any }) => {
    const isMobile = useMediaQuery({
        query: '(max-width: 640px)'
    })

    const links = localStorage.getItem("lang") === "eng" ? linksENG : linksPL

    console.log(links)

    return (
        <nav className={`${containerStyle}`}>
            {links.map((link, index) => {
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