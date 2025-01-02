import {links} from "../translations/dataPL";
import {Link as ScrollLink} from "react-scroll/modules";
import {useMediaQuery} from "react-responsive";

const MobileNav = ({containerStyle}: { containerStyle: string }) => {
    const isMobile = useMediaQuery({
        query: '(max-width: 640px)'
    })

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
                >
                    {link.name}
                </ScrollLink>
            })}
        </nav>
    );
};

export default MobileNav;