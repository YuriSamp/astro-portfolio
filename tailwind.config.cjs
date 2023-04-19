/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        neoBrutaslimButton:
          'border bg-white border-black w-32 h-14 text-xl rounded-2xl flex justify-center items-center relative after:rounded-2xl after:content:none after:top-2 after:left-2 after:right-[-8px] after:bottom-[-8px] after:-z-10 after:absolute',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
