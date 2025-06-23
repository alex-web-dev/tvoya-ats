import $ from "jquery";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

$(".business-swiper").each(function (index) {
  const $this = $(this);

  new Swiper($this[0], {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 8,
    speed: 500,
    breakpoints: {
      1440: {
        spaceBetween: 24,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      992: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
    },
  });
});
