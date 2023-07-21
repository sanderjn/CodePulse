/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./*.html", "./src/**/*.{vue,js,ts,jsx,tsx, css}"],
    theme: {
        container: (theme) => ({
            center: true,
            padding: {
                DEFAULT: theme("spacing.3"),
                sm: theme("spacing.4"),
            },
        }),
        fontFamily: {
            display: ["Questrial", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            spacing: {
                xs: "0.5rem",
                sm: "1rem",
                md: "2rem",
                lg: "3rem",
                xl: "4rem",
                "2xl": "6rem",
                "3xl": "10rem",
            },
        },
    },
    plugins: [],
};
