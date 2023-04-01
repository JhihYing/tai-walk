// swiper套件
const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 2500, 
  autoplay: { 
    delay: 4000,
    //disableOnInteraction: false, // 滑鼠滑動過後也能自動切換照片
  },
  effect: 'fade',

  // 小圓點
  pagination: {
    el: '.swiper-pagination',
  },

  // 左右箭頭
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});