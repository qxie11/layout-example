import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const initClientsSwiper = () => {
  new Swiper("#clients__swiper", {
    navigation: {
      nextEl: "#clients__nav-next",
      prevEl: "#clients__nav-prev",
    },
    pagination: {
      el: "#clients__swiper-pagination",
      clickable: true,
      bulletClass: "clients__swiper-bullet",
      bulletActiveClass: "clients__swiper-bullet-active",
      renderBullet: () =>
        `<span class="clients__swiper-bullet swiper-pagination-bullet"></span>`,
    },
  });
};

export default initClientsSwiper;
