import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);

const mainSliders = document.querySelectorAll('.main-swiper .swiper');

if(mainSliders) {
  mainSliders.forEach(slider => {
    const btnNext = slider.parentNode.querySelector('.swiper-button-next');
    const btnPrev = slider.parentNode.querySelector('.swiper-button-prev');
    const mainSlider = new Swiper(slider, {
      centerInsufficientSlides: true,
      spaceBetween: 10,
      slidesPerView: 'auto',

      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev
      },
    });

    mainSlider.on('beforeSlideChangeStart', (evt) => {
      console.log('slide before changed', evt);
    });
  });
}

const mainBannerSlider = document.querySelector('.main-banner-swiper .swiper');

if(mainBannerSlider) {
  const btnNext = mainBannerSlider.parentNode.querySelector('.swiper-button-next');
  const btnPrev = mainBannerSlider.parentNode.querySelector('.swiper-button-prev');
  const pags = mainBannerSlider.parentNode.querySelector('.swiper-pagination');

  new Swiper(mainBannerSlider, {
    centerInsufficientSlides: true,
    spaceBetween: 10,
    slidesPerView: 1,

    navigation: {
      nextEl: btnNext,
      prevEl: btnPrev
    },

    pagination: {
      el: pags,
      clickable: true
    },
  });
}

const sideBannerSlider = document.querySelector('.side-banner-swiper .swiper');

if(sideBannerSlider) {
  const pags = sideBannerSlider.parentNode.querySelector('.swiper-pagination');

  new Swiper(sideBannerSlider, {
    centerInsufficientSlides: true,
    spaceBetween: 10,
    slidesPerView: 1,

    pagination: {
      el: pags,
      clickable: true
    },
  });
}

/*catalog top slider*/

const catalogTopSlider = document.querySelector('.catalog-top-swiper .swiper');

if(catalogTopSlider) {
  const btnNext = catalogTopSlider.parentNode.querySelector('.swiper-button-next');
  const btnPrev = catalogTopSlider.parentNode.querySelector('.swiper-button-prev');
  new Swiper(catalogTopSlider, {
    centerInsufficientSlides: true,
    slidesPerView: 'auto',

    navigation: {
      nextEl: btnNext,
      prevEl: btnPrev
    }
  });
}

const catalogItemSliders = document.querySelectorAll('.catalog-item-swiper .swiper');

if(catalogItemSliders) {
  catalogItemSliders.forEach(slider => {
    const pags = slider.querySelector('.swiper-pagination');
    const catSlider = new Swiper(slider, {
      centerInsufficientSlides: true,
      spaceBetween: 10,
      slidesPerView: 1,
      nested: true,

      pagination: {
        el: pags,
        clickable: true
      },
    });

    catSlider.on('beforeSlideChangeStart', (evt) => {
      console.log('slide before changed', evt);
    });
  });
}

/*catalog top slide*/
