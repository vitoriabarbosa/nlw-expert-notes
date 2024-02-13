/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.tsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['inter', 'sans-serif']
            },
        },
    },
    plugins: [],
}

