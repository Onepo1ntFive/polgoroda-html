(function () {
  const swiperGallery = new Swiper('.swiper-container-main', {
    speed: 600,
    loop: true,
    effect: 'fade',
    parallax: true,
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();