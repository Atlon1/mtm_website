import React, {useEffect, useState} from 'react';
import {portfolioPl} from "../translations/dataPL";
import {portfolioENG} from "../translations/dataENG";


const Portfolio = () => {
  const [aboutStatsLang1, setAboutStatsLang1] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem('lang') === null) {
                localStorage.setItem('lang', 'pl');

            }
            if (localStorage.getItem('lang') === 'eng') {
                setAboutStatsLang1(portfolioENG);
            } else {
                setAboutStatsLang1(portfolioPl);
            }
        }
    }, []);

    return (
        <section className='pt-8 pb14 lg:pt-16 lg:pb-28 pb-12 ' id='portfolio'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center gap-2 mb-8'>
                    <h2 className='h2 text-center'>
                        {aboutStatsLang1}
                    </h2>

                </div>
            </div>

        </section>
    );
};

export default Portfolio;