import {FaBriefcase, FaClock, FaTrophy, FaUsers} from "react-icons/fa";
import {IoIosPricetag} from "react-icons/io";
import {MdStorage} from "react-icons/md";
import {ImUsers} from "react-icons/im";
import {FaCheck} from "react-icons/fa6";


export const links = [
    {name: 'Home', target: 'home', offset: -101},
    {name: 'About', target: 'about', offset: -81},
    {name: 'prices', target: 'prices', offset: -41},
    {name: 'Brands', target: 'brands', offset: -81},
    {name: 'Classes', target: 'classes', offset: -81},
    {name: 'Contact', target: 'contact', offset: -101},
]

export const featuresAbout = [
    {
        icon: <FaUsers/>,
        title: "Qualified engineering",
        subtitle: "People with extensive experience will advise on every issue, in terms of optimization, costs, and will propose the best solution for you.",
    },
    {
        icon: <IoIosPricetag/>,
        title: "Prices",
        subtitle: "We will adjust the price to your needs and ensure on-time shipping.",
    },
    {
        icon: <MdStorage/>,
        title: "Equipment",
        subtitle: "We have top-class equipment that will meet the expectations of every customer. We make parts for Injection Molds, Automive, parts used in the aviation industry.",
    }
]


export const achimentsStats = [{
    number: 15,
    icon: <FaBriefcase/>,
    text: "Years of Experience"
}, {
    number: 879,
    icon: <FaClock/>,
    text: "Hours of Training"
}, {
    number: 150,
    icon: <ImUsers/>,
    text: "Happy Customers"
}, {
    number: 15,
    icon: <FaTrophy/>,
    text: "international awards"
}
]

export const classesVariants = [
    {
        name: 'Milling CNC',
        img: '/assets/img/classes/millingcnc.jpeg',
        description: 'CNC milling (Computerized Numerical Control) is one of the types of metalworking. It involves cutting with a multi-blade tool called a milling cutter on a numerically controlled machine tool, called a CNC milling machine. The entire milling process consists of the tool performing the rotary movement, while the workpiece or the tool performs the feed movement. Depending on how the axis of rotation of the milling cutter is positioned in relation to the surface being machined, peripheral and face milling are distinguished. Depending on the feed movement in relation to the working movement, concurrent and counter-rotating milling are distinguished.',
    },
    {
        name: 'Turning CNC',
        img: '/assets/img/classes/turningcnc.webp',
        description: 'In the case of turning, the processed material rotates around its own axis, while the cutting tool moves relative to it, shaping the object according to the established parameters.\n' +
            '\n' +
            'Because lathes are computer-controlled, this allows for excellent precision and repeatability of the process.',
    },
    {
        name: 'Griding',
        img: '/assets/img/classes/griding.jpg',
        description: 'Surface grinding is one of the elements that complete the production process of a given element, and its purpose is to bring the product to a very precise shape and dimension compliance.',
    },
    {
        name: 'Project Engineering',
        img: '/assets/img/classes/pengenering.jpg',
        description: 'If you need new equipment, leave it to us. We will design new equipment and make it.',
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

export const membershipData = [{
    title: 'Milling CNC',
    Price: '30',
    benefits: [
        {
            icon: <FaCheck/>,
            text: '10 hours of training'
        },
        {
            icon: <FaCheck/>,
            text: '10 hours of training'
        }, {
            icon: <FaCheck/>,
            text: '10 hours of training'
        }, {
            icon: <FaCheck/>,
            text: '10 hours of training'
        }
    ]
},
    {
        title: 'Turning CNC',
        Price: '30',
        benefits: [
            {
                icon: <FaCheck/>,
                text: '10 hours of training'
            },
            {
                icon: <FaCheck/>,
                text: '10 hours of training'
            }, {
                icon: <FaCheck/>,
                text: '10 hours of training'
            }, {
                icon: <FaCheck/>,
                text: '10 hours of training'
            }
        ]
    },
    {
        title: 'Griding',
        Price: '30',
        benefits: [
            {
                icon: <FaCheck/>,
                text: '10 hours of training'
            },
            {
                icon: <FaCheck/>,
                text: '10 hours of training'
            }, {
                icon: <FaCheck/>,
                text: '10 hours of training'
            }, {
                icon: <FaCheck/>,
                text: '10 hours of training'
            }
        ]
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
    singleWord: ['Get in Touch', 'Zacznijmy pracę', 'razem!', 'Wyślij wiadomość!', 'Twoje Dane:', 'Adres email:', 'Wiadomość'],

}