/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      "banner": "#1D232A"
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00bdff",
          "secondary": "#ff0000",
          "accent": "#0000ff",
          "neutral": "#2c2824",
          "base-100": "#fff9ff",
          "info": "#006dff",
          "success": "#00c75b",
          "warning": "#c98400",
          "error": "#ff1163",
        },
      },
    ],
  },
}
