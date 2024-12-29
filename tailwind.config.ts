import type {Config} from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./component/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "15px",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        fontFamily: {
            oswald: 'var(--font-oswald)',
            roboto: 'var(--font-roboto)'
        },
        backgroundImage: {
            hero: "url('public/assets/img/hero/bg.png')",
            membership: "url('public/assets/img/membership/bg.jpg')",
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#333",
                    100: "#484848",
                    200: "#151515",
                    300: "#111",
                },
                accent: '#d4000d'
            },
        },
    },
    plugins: [],
} satisfies Config;
