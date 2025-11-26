import "bootstrap";
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Thumbs, EffectFade } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "@/assets/scss/app.scss";

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("app-loader");
  if (loader) setTimeout(() => (loader.style.display = "none"), 800);
  // Slideshow
  const slideshow = new Swiper(".slideshow-section .swiper", {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: {
      nextEl: ".slideshow-section .swiper-button-next",
      prevEl: ".slideshow-section .swiper-button-prev",
    },
    pagination: {
      el: ".slideshow-section .swiper-pagination",
      dynamicBullets: true,
    },
    modules: [Navigation, Autoplay, EffectFade, Pagination],
  });

  // Courses carousel
  const coursesCates = new Swiper(".courses-carousel .swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 20 },
      992: { slidesPerView: 3, spaceBetween: 25 },
      1400: { slidesPerView: 4 },
    },
    navigation: {
      nextEl: ".courses-carousel .swiper-button-next",
      prevEl: ".courses-carousel .swiper-button-prev",
    },
    modules: [Navigation],
  });

  // Partners carousel
  const partners = new Swiper(".partners-section .swiper", {
    slidesPerView: 2,
    breakpoints: {
      768: { slidesPerView: 3 },
      992: { slidesPerView: 5 },
      1400: { slidesPerView: 6 },
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
});





