import { linksPL } from "../translations/dataPL";
import { linksENG } from "../translations/dataENG";
import { Link as ScrollLink } from "react-scroll/modules";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

type LinksType = {
    name: string;
    target: string;
    offset: number;
};

type MobileNavProps = {
    containerStyle: string;
    closeNav: (isOpen: boolean) => void; // Precyzyjny typ dla closeNav
};

const MobileNav = ({ containerStyle, closeNav }: MobileNavProps) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 640px)",
    });

    const [linksLang, setLinksLang] = useState<LinksType[]>([]);

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
            {linksLang.map((link, index) => (
                <ScrollLink
                    offset={link.offset}
                    to={link.target}
                    smooth
                    spy
                    activeClass={`${isMobile && "active"}`}
                    key={index}
                    className="cursor-pointer hover:text-accent transition-all"
                    onClick={() => closeNav(false)}
                >
                    {link.name}
                </ScrollLink>
            ))}
        </nav>
    );
};

export default MobileNav;
