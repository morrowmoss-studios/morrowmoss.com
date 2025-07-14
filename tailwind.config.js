module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                moss: {
                    DEFAULT: '#6b7748', // your logo's main color
                    dark: '#0c0c0a',    // dark shadow
                    light: '#a4b97b',   // highlight lichen
                },
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'Courier', 'monospace'],
            },
        },
    },
    plugins: [],
}
