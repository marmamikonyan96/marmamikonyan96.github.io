const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });