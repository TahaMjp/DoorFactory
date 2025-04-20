//  Initialize Swiper
let modulsSwiper = new Swiper(".modulsSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});

//  Initialize Swiper

let CustomersSwiper = new Swiper(".CustomersSwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
    },
  },
});
