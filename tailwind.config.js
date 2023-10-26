/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        light_gray: "hsl(212, 45%, 89%)",
        grayish_blue: "hsl(220, 15%, 55%)",
        dark_blue: "hsl(218, 44%, 22%)"
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"]
      }
    },
  },
  plugins: [],
}