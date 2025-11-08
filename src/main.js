import "bootstrap";
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Thumbs, EffectFade } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import "@/assets/scss/app.scss";


// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(() => {
//     document.getElementById("app-loader").style.display = "none";
//   }, 800); 
// });
// init Swiper:
const slideshow = new Swiper(".slideshow-section .swiper", {
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: "fade",
  spaceBetween: 30,
  fadeEffect: { crossFade: true },
  loop: true,
  navigation: {
    nextEl: ".slideshow-section .swiper-button-next",
    prevEl: ".slideshow-section .swiper-button-prev",
  },
  modules: [Navigation, Autoplay, EffectFade],
});
const courses = new Swiper(".courses-cates-carousel .swiper", {
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".featured-courses .swiper-button-next",
    prevEl: ".featured-courses .swiper-button-prev",
  },
  modules: [Navigation],
});
const coursesCates = new Swiper(".courses-carousel .swiper", {
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".featured-courses .swiper-button-next",
    prevEl: ".featured-courses .swiper-button-prev",
  },
  modules: [Navigation],
});

const partners = new Swiper(".partners-section .swiper", {
  slidesPerView: 2, 
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5, 
    },
    1400: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".partners-section .swiper-button-next",
    prevEl: ".partners-section .swiper-button-prev",
  },
  pagination: {
    el: ".partners-section .swiper-pagination",
    clickable: true,
  },
  modules: [Navigation, Pagination],
});

const projectThumbs = new Swiper(".slideshow-project-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    992: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
});
const slideshowProject = new Swiper(".slideshow-project .swiper", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".slideshow-project .swiper-button-next",
    prevEl: ".slideshow-project .swiper-button-prev",
  },
  modules: [Navigation, Autoplay, Thumbs],
  thumbs: {
    swiper: projectThumbs,
  },
});

