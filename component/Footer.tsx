'use client'
import Image from 'next/image'
import Link from 'next/link'
import {Link as ScrollLink} from 'react-scroll'
import {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'
import {FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaLinkedin, FaYoutube} from "react-icons/fa";
import {contactPl, contactUsPl} from "../translations/dataPL";
import {contactENG, contactUsENG} from "../translations/dataENG";
import {motion} from "framer-motion";
import MapComponent from "./Map";




const footerContainerVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 0.4,
            ease: 'linear',
        }
    }
}

const footerItemVariants = {
    hidden: {
        y: 20,
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.6, 0.3, 0.8],
        }
    }
}

const Footer = () => {

    const contactUs = localStorage.getItem("lang") === "eng" ? contactUsENG : contactUsPl
    const {thxText, singleWord, nameValidation, textValidation, emailValidation} = localStorage.getItem("lang") === "eng" ? contactENG : contactPl
    const formData: any = useRef(null)

    const validateName = (form: any) => {
        const {name, nameLength} = nameValidation
        if (!form.name) {
            return `${name}`
        } else if (form.name.length < 2) {
            return `${nameLength}`
        }
        return null
    }


    const validateEmail = (form: any) => {
        const {email, emailFormat} = emailValidation
        if (!form.email) {
            return `${email}`
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
            return `${emailFormat}`
        }
        return null
    }

    const validateText = (form: any) => {
        const {text, textLength} = textValidation
        if (!form.text) {
            return `${text}`
        } else if (form.text.length < 40) {
            return `${textLength}`
        }
        return null
    }


    const [err, setErr] = useState<{ name: string | null, email: string | null, text: string | null }>({
        name: null,
        email: null,
        text: null
    });


    const [borderColor, setBorderColor] = useState('');
    const [agree, setAgree] = useState(<div/>)
    const [form, setForm] = useState({
        name: '',
        email: '',
        text: ''
    })


    const updateField = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSendMessage = (e: any) => {
        e.preventDefault()
        const nameError = validateName(form)
        const emailError = validateEmail(form)
        const textErorr = validateText(form)

        if (nameError || emailError || textErorr) {
            setErr({...err, name: nameError, email: emailError, text: textErorr})
            setBorderColor('1px solid red')
        } else {
            setErr({...err, name: null, email: null, text: null})
            setBorderColor('')


            emailjs.sendForm('service_ysksjvj', 'template_90whiqb', formData.current as any, 'DuLsiLic-6F4jmwX4')

            setForm({...form, name: '', email: '', text: ''})
            return setAgree(
                <div style={
                    {
                        color: '#49953a',
                        textAlign: 'center',
                    }
                }
                >
                    {thxText}
                </div>
            )
        }
    }


    return (
        <footer className='bg-primary-300 pt-24' id='contact'>
            <div className="coantainer mx-auto pb-24">
                <motion.div
                    variants={footerContainerVariants}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className='text-white grid grid-cols-1 xl:grid-cols-2 m-8 gap-8'>
                    <motion.div
                        variants={footerItemVariants}
                        className='flex flex-col gap-4'>
                        <ScrollLink
                            offset={-101}
                            to='home'
                            smooth
                            spy
                            activeClass='active'
                            className='cursor-pointer hover:text-accent transition-all'
                        >
                            <Image
                                src={'/assets/img/MTM.svg'}
                                alt={'logo'}
                                width={400}
                                height={200}
                            />
                        </ScrollLink>
                        <p className='max-w-sm'>
                            {contactUs.description}
                        </p>
                        <ul className='flex flex-col gap-4'>
                            <li className='flex items-center gap-4'>
                                <FaMapMarkerAlt className='text-xl text-accent'/>
                                <span>Nowy Tomyśl 64-300, ul. Marszałka Józefa Piłsudskiego 26, Poland</span>
                            </li>
                            <li>
                                <Link
                                    className='flex items-center gap-4'
                                    href="tel:+48690544645">
                                    <FaPhoneAlt className='text-xl text-accent'/>
                                    <span>+ (48) 690 544 645 Maciej</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='flex items-center gap-4'
                                    href='emailto:mtm.solution.biuro@gmail.com'>
                                    <FaEnvelope className='text-xl text-accent'/>
                                    <span>mtm.solution.biuro@gmail.com</span>
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                    <MapComponent/>
                    <motion.div
                        variants={footerItemVariants}
                        className='flex flex-col'>
                        <h2>{singleWord[7]}</h2>
                        <form
                            className='flex-1 rounded-2xl flex flex-col gap-y-6 items-start'
                            ref={formData}
                            onSubmit={handleSendMessage}
                        >
                            <input
                                onChange={updateField}
                                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                                type='text'
                                placeholder={contactUs.placeholder}
                                name="name"
                                value={form.name}
                                style=
                                    {
                                        {
                                            borderBottom: (!err.name ? "1px solid white" : borderColor)
                                        }
                                    }
                            />
                            <div className='text-red-700 font-secondary flex'>{err.name}</div>
                            <input
                                onChange={updateField}
                                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                                type='text'
                                name="email"
                                value={form.email}
                                style=
                                    {
                                        {
                                            borderBottom: (!err.name ? "1px solid white" : borderColor)
                                        }
                                    }
                                placeholder='Email'/>
                            <div className='text-red-700 font-secondary flex'>{err.email}</div>
                            <textarea
                                onChange={updateField}
                                className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-5'
                                placeholder={singleWord[6]}
                                name="text"
                                value={form.text}
                                style=
                                    {
                                        {
                                            borderBottom: (!err.text ? "1px solid white" : borderColor)
                                        }
                                    }

                            />
                            <div className='text-red-700 font-secondary flex'>{err.text}</div>
                            <button
                                type='submit'
                                className={`h-[50px] w-[150px] group relative cursor-pointer overflow-hidden bg-accent uppercase`}>
                                <span
                                    className='ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32'>
                                 </span>
                                <span
                                    className='ease relative text-white transition duration-300 group-hover:text-white'>
                                    {contactUs.sendbtn}
                                 </span>
                            </button>
                            {agree}
                        </form>
                    </motion.div>
                </motion.div>
            </div>
            <div className='text-white border-t border-white/20 py-12'>
                <div className='container mx-auto h-full'>
                    <div className='flex items-center justify-between h-full'>
                        <span>&copy; MTM.Precision Solutions 2024 all rights reserved</span>
                        <ul className='flex gap-4 text-xl'>
                            <li>
                                <Link href='#'>
                                    <FaFacebook
                                        className='text-xl text-accent hover:text-white transition-all duration-300'/>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <FaLinkedin
                                        className='text-xl text-accent hover:text-white transition-all duration-300'/>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <FaYoutube
                                        className='text-xl text-accent hover:text-white transition-all duration-300'/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;