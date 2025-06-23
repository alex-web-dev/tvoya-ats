import $ from "jquery";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

$(".reviews-swiper").each(function () {
  const $this = $(this);

  const nextEl = $this.find(".reviews-swiper-next")[0];
  const prevEl = $this.find(".reviews-swiper-prev")[0];

  new Swiper($this[0], {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 8,
    speed: 500,
    navigation: {
      nextEl,
      prevEl,
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 16,
        slidesPerView: "auto",
      },
    },
  });
});
