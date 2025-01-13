import {FaBriefcase, FaClock, FaTrophy, FaUsers} from "react-icons/fa";
import {IoIosPricetag} from "react-icons/io";
import {MdStorage} from "react-icons/md";
import {ImUsers} from "react-icons/im";
import {FaCheck} from "react-icons/fa6";


export const links = [
    {name: 'Start', target: 'home', offset: -101},
    {name: 'O nas', target: 'about', offset: -81},
    {name: 'Usługi', target: 'prices', offset: -41},
    {name: 'Marki', target: 'brands', offset: -81},
    {name: 'Czym sie zajmujemy', target: 'classes', offset: -81},
    {name: 'Kontakt', target: 'contact', offset: -101},
]


export const heroData = [{
    title: "Frezowanie CNC",
    subtitle: "Wysoka Precyzja",
    text: "Posiadamy wieloletnie doświadczenie w tej dziedzinie."
},
    {
        title: "Toczenie CNC",
        subtitle: "Wysoka jakość",
        text: "Rozwiązania atrakcyjne cenowo."
    },
    {
        title: "Szlifowanie",
        subtitle: "Wysoka dokładność",
        text: "Zatrudniamy specjalistów w tej dziedzinie."
    },
    {
        title: "Zacznij z nami!",
        subtitle: "Wysoka jakść",
        text: "Zatrudniamy specjalistów w tej dziedzinie."
    }
]

export const AboutStatsPL = [{
    singleWord: 'O nas',
    Title: 'Choć nasza firma jest młoda, nasz zespół składa się z doświadczonych specjalistów z wieloletnim stażem w branży. Oferujemy usługi w zakresie obróbki stali, aluminium, w tym frezowanie, toczenie i szlifowanie.'
}]

export const featuresAbout = [
    {
        icon: <FaUsers/>,
        title: "Wykflaifikowani inżynierowie",
        subtitle: "Ludzie z bogatym doświadczeniem doradzą w każdej kwestii pod kątem optymalizacji, kosztów oraz zaproponują najlepsze dla Ciebie rozwiązanie.",
    },
    {
        icon: <IoIosPricetag/>,
        title: "Ceny",
        subtitle: "Dostosujemy cenę do Twoich potrzeb i zapewnimy terminową dostawę.",
    },
    {
        icon: <MdStorage/>,
        title: "Sprzęt",
        subtitle: "Posiadamy najwyższej klasy sprzęt, który spełni oczekiwania każdego klienta. Wykonujemy części do form wtryskowych, motoryzacyjnych, części używane w przemyśle lotniczym.",
    }
]
export const achimentsStats = [{
    number: 15,
    icon: <FaBriefcase/>,
    text: "Lata doświadczenia"
}, {
    number: 879,
    icon: <FaClock/>,
    text: "Czas pracy"
}, {
    number: 150,
    icon: <ImUsers/>,
    text: "Zadowoleni klienci"
}, {
    number: 15,
    icon: <FaTrophy/>,
    text: "Zakończone projekty"
}
]


export const membershipData = [{
    title: 'Frezowanie CNC',
    Price: '120',
    benefits: [
        {
            icon: <FaCheck/>,
            text: 'Frezowanie CNC, w 3 osiach'
        },
        {
            icon: <FaCheck/>,
            text: 'Frezowanie CNC, w 4 osiach'
        }, {
            icon: <FaCheck/>,
            text: 'Frezowanie CNC, w 5 osiach'
        }, {
            icon: <FaCheck/>,
            text: 'Maksymalny zakres prac: 500x500x400'
        }
    ]
},
    {
        title: 'Toczenie CNC',
        Price: '120',
        benefits: [
            {
                icon: <FaCheck/>,
                text: 'Toczenie w zakresie: Fi800x1500'
            },
            {
                icon: <FaCheck/>,
                text: 'Toczenie elementów do form wtryskowych'
            }, {
                icon: <FaCheck/>,
                text: 'Toczenie elementów dla Budowy maszyn'
            }, {
                icon: <FaCheck/>,
                text: 'Toczenie trudno obrabialnych materiałów'
            }
        ]
    },
    {
        title: 'Szlifowanie',
        Price: '100',
        benefits: [
            {
                icon: <FaCheck/>,
                text: 'Szlifowanie w zakresie 300x1200x400'
            },
            {
                icon: <FaCheck/>,
                text: 'Szlifowanie elementów do form wtrysknych'
            }, {
                icon: <FaCheck/>,
                text: 'Szlifowanie elementów do budowy maszyn'
            }, {
                icon: <FaCheck/>,
                text: 'Szlifowanie trudnych materiałów dla przemysłu spożywczego'
            }
        ]
    },
]

export const membershipData2PL = {
    title: 'Cennik',
    subtitle: '/h',
    value: 'PLN',
    button: 'Zapytaj o szczegóły'
}

export const brandsDataPl = {
    brand: 'Znane Marki',
}

export const classesVariants = [
    {
        name: 'Frezowanie CNC',
        img: '/assets/img/classes/millingcnc.jpeg',
        description: 'Frezowanie CNC (Computerized Numerical Control) jest jednym z rodzajów obróbki metali. Polega na cięciu wieloostrzowym narzędziem zwanym frezem na obrabiarce sterowanej numerycznie, zwanej frezarką CNC. Cały proces frezowania polega na tym, że narzędzie wykonuje ruch obrotowy, podczas gdy przedmiot obrabiany lub narzędzie wykonuje ruch posuwowy. W zależności od tego, jak oś obrotu frezu jest ustawiona względem obrabianej powierzchni, rozróżnia się frezowanie obwodowe i czołowe. '
    },
    {
        name: 'Toczenie CNC',
        img: '/assets/img/classes/turningcnc.webp',
        description: 'W przypadku toczenia, obrabiany materiał obraca się wokół własnej osi, podczas gdy narzędzie skrawające porusza się względem niej, kształtując przedmiot według ustalonych parametrów. Dzięki sterowaniu komputerowemu tokarkami można uzyskać doskonałą precyzję i powtarzalność procesu.'
    },
    {
        name: 'Szlifowanie',
        img: '/assets/img/classes/griding.jpg',
        description: 'Szlifowanie powierzchni jest jednym z elementów kończących proces produkcyjny danego elementu i ma na celu nadanie produktowi bardzo precyzyjnego kształtu i wymiarów.',
    },
    {
        name: 'Projektowanie i optymalizacja',
        img: '/assets/img/classes/pengenering.jpg',
        description: 'Jeśli potrzebujesz nowego sprzętu, zostaw to nam. Zaprojektujemy nowy sprzęt i go wykonamy.',
    }
]

export const brands = [{
    src: '/assets/img/brands/brand-1.png',
    alt: '/'
},
    {
        src: '/assets/img/brands/brand-2.png',
        alt: '/'
    },
    {
        src: '/assets/img/brands/Brand-3.jpg',
        alt: '/'
    },
    {
        src: '/assets/img/brands/brand-5.png',
        alt: '/'
    }
]



export const contactPl = {

    nameValidation: {
        name: 'Pole nie może być puste!',
        nameLength: 'Imię musi zawierać co najmniej 2 znaki!',
    },
    emailValidation: {
        email: 'Podany email jest nieprawidłowy!',
        emailFormat: 'Zły e-mail!',
    },
    textValidation: {
        text: 'Pole nie może być puste!',
        textLength: 'Wiadomość musi zawierać co najmniej 40 znaków!',
    },


    thxText: 'Wiadomość została wysłana!. Dziękuje!',
    singleWord: ['Get in Touch', 'Zacznijmy pracę', 'razem!', 'Wyślij wiadomość!', 'Twoje Dane:', 'Adres email:', 'Wiadomość', "Napisz do nas!"],
}
export const contactUsPl = {
    description: "Zapraszamy do współpracy!"
}