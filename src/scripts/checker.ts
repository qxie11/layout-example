import initClientsSwiper from "./main-page/clients-slider";
import initAdvantagesSlider from "./main-page/advantages-slider";
import initStatsSlider from "./main-page/stats-slider";

interface IChecker {
  id: string;
  callback: Function,
}

const CHECKER: IChecker[] = [
  {
    id: "#clients__swiper",
    callback: initClientsSwiper,
  },
  {
    id: "#advantages-swiper",
    callback: initAdvantagesSlider,
  },
  {
    id: "#stats-swiper",
    callback: initStatsSlider,
  },
];

const initChecker = () =>
  CHECKER.forEach(({ id, callback }) => {
    const $el = document.querySelector(id);
    if ($el) callback();
  });

export default initChecker;
