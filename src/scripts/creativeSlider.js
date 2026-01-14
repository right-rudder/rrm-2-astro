import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".creativeSwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
    spaceBetween: 60,
    setWrapperSize: true,
    loop: true,
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 1800,
      speed: 1800,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
        speed: 2000,
      },
      0: {
        slidesPerView: 1,
        speed: 2000,
      },
    },
    effect: "slide",
  });
});
