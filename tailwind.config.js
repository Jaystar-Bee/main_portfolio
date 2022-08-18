const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        fontFamily: {
            display: ['Teko', 'sans-serif'],
            body: ['Poppins', 'sans-serif'],

        },
        extend: {
            colors: {
                'primary-pink': '#F76C5E',
                'pink-lite': '#F68E5F',
                'primary-yellow': '#F5DD90',
                'primary-blue': '#324376',
                'blue-lite': '#586BA4',
            }
        }
    },
    plugins: [],
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`
    ]
}