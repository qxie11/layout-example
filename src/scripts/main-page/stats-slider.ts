import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

let slider;

const initStatsSlider = () => {
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const {
        contentRect: { width: bodyWidth },
      } = entry;

      const breakpoint = 1600;

      if (bodyWidth < breakpoint && !slider) {
        slider = new Swiper("#stats-swiper", {
          navigation: {
            nextEl: "#stats__wrapper-next",
            prevEl: "#stats__wrapper-prev",
          },
          spaceBetween: 90,
        });
      } else if (bodyWidth >= breakpoint && slider) {
        slider.destroy();
        slider = undefined;
      }
    }
  });

  resizeObserver.observe(document.body);
};

export default initStatsSlider;
