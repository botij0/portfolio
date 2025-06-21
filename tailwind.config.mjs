/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#ff005d",
                secondary: "#00fff7",
                tertiary: "#7a00ff",
                accentLime: "#c6ff00",
                warning: "#ff3131",
                asphalt: "#121212",
                dark: "#0D0C11",
            },
        },
    },
    plugins: [],
};
