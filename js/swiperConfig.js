//  Initialize Swiper
let modulsSwiper = new Swiper(".modulsSwiper", {
  pagination: {
    el: ".swiper-pagination",
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
