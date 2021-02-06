module.exports = {
  // Configure the purge option with the paths to all of your pages and components so Tailwind can tree-shake unused styles in production builds
  // https://tailwindcss.com/docs/guides/nextjs#configure-tailwind-to-remove-unused-styles-in-production
  purge: [
    "./apollo/**/*.{js,ts,jsx,tsx}",
    "./heimdall/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
