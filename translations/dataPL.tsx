import {FaBriefcase, FaClock, FaTrophy, FaUsers} from "react-icons/fa";
import {IoIosPricetag} from "react-icons/io";
import {MdStorage} from "react-icons/md";
import {ImUsers} from "react-icons/im";


export const links = [
    {name: 'Home', target: 'home', offset: -101},
    {name: 'About', target: 'about', offset: -81},
    {name: 'Classes', target: 'classes', offset: -81},
    {name: 'Team', target: 'team', offset: -1},
    {name: 'prices', target: 'prices', offset: -41},
    {name: 'Testimonial', target: 'testimonial', offset: -1},
    {name: 'Blog', target: 'blog', offset: -1},
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


export const achimentsStats  = [{
    number: 10,
    icon: <FaBriefcase/>,
    text: "Years of Experience"
}, {
    number: 879,
    icon: <FaClock/>,
    text: "Trained Engineers"
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