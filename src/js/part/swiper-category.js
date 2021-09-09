(function () {
  const swiperCarousel = new Swiper('.swiper-container-category', {
    speed: 600,
    watchSlidesVisibility: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 30,
      }
    }
  });

})();