
import type {Metadata} from "next";
import {Oswald, Roboto} from "next/font/google";
import "./globals.css";

//components
import Header from "../component/Header";
import Footer from "../component/Footer";

const oswald = Oswald({
    variable: "--font-oswald",
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
    title: "MTM Precision Solutions",
    description: "Welcome to MTM Precision Solutions",
};



export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className='bg-gray-200'>
        <body
            className={`${oswald.variable} ${roboto.variable} w-full max-w-[1920px] mx-auto bg-white`}
        >
        <Header/>
        {children}
        <Footer/>

        </body>
        </html>
    );
}
