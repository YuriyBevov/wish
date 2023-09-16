import Swiper, {Navigation, Pagination, Thumbs, Controller} from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs, Controller]);

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
/*catalog top slider end*/

/*product thumbs slider*/
const productSlider = document.querySelector('.product-detail-slider');

if(productSlider) {
  const slider = productSlider.querySelector('.product-slider');
  const thumbs = productSlider.querySelector('.product-thumb-slider');

  const sliderThumbs = new Swiper(thumbs, {
    spaceBetween: 10,
    slidesPerView: 4,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    clickable: true,

    breakpoints: {
      535: {
        spaceBetween: 30,
      }
    },
  });

  const sliderMain = new Swiper(slider, {
    spaceBetween: 10,
    slidesPerView: 1,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    thumbs: {
      swiper: sliderThumbs,
    },

    navigation: {
      nextEl: '.product-thumb-slider-container .swiper-button-next',
      prevEl: '.product-thumb-slider-container .swiper-button-prev'
    },
  });
}
/*product thumbs slider end*/


