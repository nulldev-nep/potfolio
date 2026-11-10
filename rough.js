const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction:'horizontal',
  loop: true,
  spaceBetween:24,
  speed:600,
  grabcursor:true,
  slidersPreView:auto,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});