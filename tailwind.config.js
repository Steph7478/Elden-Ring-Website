/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        "sm": "480px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      },

      colors: {
        "musgo": '#1F4B48',
        'light-yellow': '#E8AF64',
        'dark-brown': '#3B2203',
        'orange-red': '#772F2F',
        'light-orange': "#53340F"
      },

      backgroundImage: {
        moldure: "url(/images/Decorations/moldure.png)",
        homeheader: "url(/images/Background/home_header.jpg)",
        home1: 'url(/images/Background/home_bg_1.png)',
        home2: 'url(/images/Background/home_bg_2.jpg)',
        guide1: 'url(/images/Background/guias_bg_1.jpg)',
        guide2: 'url(/images/Background/guias_bg_2.jpg)',
        pj1: "url(/images/Background/pj_bg_1.png)",
        pj2: "url(/images/Background/pj_bg_2.png)",
        obj1: "url(/images/Background/obj_bg_1.jpg)",
        obj2: "url(/images/Background/obj_bg_2.png)",
        news1: "url(/images/Background/noticias_bg_1.jpg)",
        news2: "url(/images/Background/noticias_bg_2.jpg)",
        objmodal: "url(/images/Modals/obj_modal.jpg)",
        pjmodal: "url(/images/Modals/pj_modal.jpg)",
        guidemodal: "url(/images/Modals/guide_modal.jpg)",
        arrown: 'url(/svg/arrownext.png)',
        arrowp: 'url(/svg/arrowprev.png)',

      },
    },
    fontFamily: {
      della: ['Della Respira', 'serif'],
      'dm-serif-display': ['DM Serif Display', 'serif'],
      'old-london': ['Old London', 'serif'],
    },
  },

  plugins: [],
}
