//  Initialize Swiper
let modulsSwiper = new Swiper(".modulsSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

//  Initialize Swiper
let CustomersSwiper = new Swiper(".CustomersSwiper", {
  slidesPerView: 3,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
  },
});
