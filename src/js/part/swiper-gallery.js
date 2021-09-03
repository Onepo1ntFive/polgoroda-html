(function () {
  const swiperGallery = new Swiper('.swiper-container-gallery', {
    speed: 600,
    watchOverflow: false,
    watchSlidesProgress: true,
    loopAdditionalSlides: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    init: false,
  });
  swiperGallery.on('init', (e) => {
    if (e.slides.length <= 1) {
      e.$el[0].classList.add('swiper-container-single')
    }
  });
  swiperGallery.init();

})();