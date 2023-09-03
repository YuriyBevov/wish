import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);
const mainSliders = document.querySelectorAll('.main-swiper .swiper');

if(mainSliders) {
  mainSliders.forEach(slider => {
    const btnNext = slider.parentNode.querySelector('.swiper-button-next');
    const btnPrev = slider.parentNode.querySelector('.swiper-button-prev');
    new Swiper(slider, {
      centerInsufficientSlides: true,
      spaceBetween: 10,
      slidesPerView: 'auto',
      /*slidesOffsetAfter: 20,
      slidesOffsetBefore: 20,*/

      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev
      },
    });
  });
}


