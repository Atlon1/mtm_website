import {linksPL} from "../translations/dataPL";
import {linksENG} from "../translations/dataENG";
import {Link as ScrollLink} from "react-scroll/modules";
import {useMediaQuery} from "react-responsive";
import {useEffect,useState} from "react";

const MobileNav = ({containerStyle, closeNav}: { containerStyle: string , closeNav: any }) => {
    const isMobile = useMediaQuery({
        query: '(max-width: 640px)'
    })

    const [links, setLinks] = useState<any[]>([])

useEffect(()=>{
    const lang = localStorage.getItem("lang") || "pl";
    const newLinks = lang === "pl" ? linksPL : linksENG;

    if (Array.isArray(newLinks)) {
        setLinks(newLinks);  // Ustawiamy links po załadowaniu komponentu
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