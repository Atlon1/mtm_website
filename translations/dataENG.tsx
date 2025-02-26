import {FaBriefcase, FaClock, FaTrophy, FaUsers} from "react-icons/fa";
import {IoIosPricetag} from "react-icons/io";
import {MdStorage} from "react-icons/md";
import {ImUsers} from "react-icons/im";
import {FaCheck} from "react-icons/fa6";
import { IconType } from "react-icons";


type linksType = {
    name: string
    target: string
    offset: number
}
export const linksENG : linksType[] = [
    {name: 'Home', target: 'home', offset: -101},
    {name: 'About us', target: 'about', offset: -81},
    {name: 'Services', target: 'prices', offset: -41},
    {name: 'Brands', target: 'brands', offset: -81},
    {name: 'What we do', target: 'classes', offset: -81},
    {name: 'Contact', target: 'contact', offset: -101},
]


export const heroDataENG = [{
    title: "CNC Milling",
    subtitle: "High Precision",
    text: "We have many years of experience in this field."
},
    {
        title: "CNC Turning",
        subtitle: "High Quality",
        text: "Cost-effective solutions."
    },
    {
        title: "Grinding",
        subtitle: "High Accuracy",
        text: "We employ specialists in this field."
    },
    {
        title: "Start with us!",
        subtitle: "High Quality",
        text: ""
    }
]

export const AboutStatsENG1 = 'About us'
export const AboutStatsENG2=    'Although our company is young, our team consists of experienced specialists with many years of industry experience. We offer services in steel and aluminum processing, including milling, turning, and grinding.'

type featuresType = {
    icon: IconType
    title: string
    subtitle: string
}

export const featuresAboutENG: featuresType[]  = [
    {
        icon: FaUsers,
        title: "Qualified Engineers",
        subtitle: "People with rich experience will advise on every aspect of optimization, costs, and will propose the best solution for you.",
    },
    {
        icon: IoIosPricetag,
        title: "Prices",
        subtitle: "We will tailor the price to your needs and ensure timely delivery.",
    },
    {
        icon: MdStorage,
        title: "Equipment",
        subtitle: "We have top-class equipment that will meet the expectations of every customer. We manufacture parts for injection molds, automotive, and aerospace industry components.",
    }
]
export const achimentsStatsENG = [{
    number: 15,
    icon: FaBriefcase,
    text: "Years of Experience"
}, {
    number: 879,
    icon: FaClock,
    text: "Work Hours"
}, {
    number: 150,
    icon: ImUsers,
    text: "Satisfied Customers"
}, {
    number: 15,
    icon: FaTrophy,
    text: "Completed Projects"
}
]


export const membershipDataENG = [{
    title: 'CNC Milling',
    Price: '28',
    benefits: [
        {
            icon: <FaCheck/>,
            text: 'CNC Milling, 3-axis'
        },
        {
            icon: <FaCheck/>,
            text: 'CNC Milling, 4-axis'
        }, {
            icon: <FaCheck/>,
            text: 'CNC Milling, 5-axis'
        }, {
            icon: <FaCheck/>,
            text: 'Maximum work range: 500x500x400'
        }
    ]
},
    {
        title: 'CNC Turning',
        Price: '28',
        benefits: [
            {
                icon: <FaCheck/>,
                text: 'Turning range: Fi800x1500'
            },
            {
                icon: <FaCheck/>,
                text: 'Turning parts for injection molds'
            }, {
                icon: <FaCheck/>,
                text: 'Turning parts for Machine Building'
            }, {
                icon: <FaCheck/>,
                text: 'Turning difficult-to-machine materials'
            }
        ]
    },
    {
        title: 'Grinding',
        Price: '24',
        benefits: [
            {
                icon: <FaCheck/>,
                text: 'Grinding range 300x1200x400'
            },
            {
                icon: <FaCheck/>,
                text: 'Grinding parts for injection molds'
            }, {
                icon: <FaCheck/>,
                text: 'Grinding parts for machine building'
            }, {
                icon: <FaCheck/>,
                text: 'Grinding difficult materials for the food industry'
            }
        ]
    },
]

export const membershipData2ENG = {
    title: 'Price List',
    subtitle: '/h',
    value: 'Euro',
    button: 'Ask for details'
}

export const brandsDataENG = {
    brand: 'Famous Brands',
}

export const classesVariantsENG = [
    {
        name: 'CNC Milling',
        img: '/assets/img/classes/millingcnc.jpeg',
        description: 'CNC Milling (Computerized Numerical Control) is a type of metalworking. It involves multi-edge cutting with a tool called a milling cutter on a numerically controlled machine tool, called a CNC milling machine. The entire milling process involves the tool rotating while the workpiece or tool moves in a feeding motion. Depending on the orientation of the milling cutter’s axis in relation to the work surface, there are two types: peripheral milling and face milling.'
    },
    {
        name: 'CNC Turning',
        img: '/assets/img/classes/turningcnc.webp',
        description: 'In turning, the material being processed rotates around its own axis, while the cutting tool moves along it to shape the workpiece according to predefined parameters. Thanks to computer-controlled lathes, perfect precision and repeatability can be achieved.'
    },
    {
        name: 'Grinding',
        img: '/assets/img/classes/griding.jpg',
        description: 'Grinding is one of the final processes in the production of a given element and aims to give the product a very precise shape and dimensions.',
    },
    {
        name: 'Design and Optimization',
        img: '/assets/img/classes/pengenering.jpg',
        description: 'If you need new equipment, leave it to us. We will design and manufacture the new equipment.',
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
        src: '/assets/img/brands/brand-3.jpg',
        alt: '/'
    },
    {
        src: '/assets/img/brands/brand-5.png',
        alt: '/'
    }
]


export const contactENG = {

    nameValidation: {
        name: 'The field cannot be empty!',
        nameLength: 'Name must contain at least 2 characters!',
    },
    emailValidation: {
        email: 'The provided email is invalid!',
        emailFormat: 'Invalid email!',
    },
    textValidation: {
        text: 'The field cannot be empty!',
        textLength: 'Message must contain at least 40 characters!',
    },


    thxText: 'The message has been sent! Thank you!',
    singleWord: ['Get in Touch', 'Let’s start working', 'together!', 'Send message!', 'Your Data:', 'Email address:', 'Message', "Write to us!"],
}
export const contactUsENG = {
    description: "We invite you to cooperate!",
    sendbtn:"Send message!",
    placeholder: "Name and surname"
}

export const portfolioENG = "Portfolio"

export const portfolioAssetsENG = [{
    src: '/assets/img/portfolio/a1.jpg',
    alt: 'Portfolio Item'
},
    {
        src: '/assets/img/portfolio/a2.jpg',
        alt: 'Portfolio Item'
    },
    {
        src: '/assets/img/portfolio/a3.jpg',
        alt: 'Portfolio Item'
    },
    {
        src: '/assets/img/portfolio/a4.jpg',
        alt: 'Portfolio Item'
    },
    {
        src: '/assets/img/portfolio/a5.jpg',
        alt: 'Portfolio Item'
    },
    {
        src: '/assets/img/portfolio/a6.jpg',
        alt: 'Portfolio Item'
    }, {
        src: '/assets/img/portfolio/a7.jpg',
        alt: 'Portfolio Item'
    },
    {
        src: '/assets/img/portfolio/a8.jpg',
        alt: 'Portfolio Item'
    },
    {
        src: '/assets/img/portfolio/a9.jpg',
        alt: 'Portfolio Item'
    },
    {
        src: '/assets/img/portfolio/a10.jpg',
        alt: 'Portfolio Item'
    },
    {
        src: '/assets/img/portfolio/a11.jpg',
        alt: 'Portfolio Item'
    },
    {
        src: '/assets/img/portfolio/a12.jpg',
        alt: 'Portfolio Item'
    },
    {
        src: '/assets/img/portfolio/a13.jpg',
        alt: 'Portfolio Item'
    }]