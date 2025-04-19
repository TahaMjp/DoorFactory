//  Initialize Swiper
let modulsSwiper = new Swiper(".modulsSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});

//  Initialize Swiper
let CustomersSwiper = new Swiper(".CustomersSwiper", {
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 2000,
  },
});
