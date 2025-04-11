let BannerSwiper = new Swiper(".BannerSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 4000,
  },
});

//  Initialize Swiper
let AboutBanner = new Swiper(".AboutBanner", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

//  Initialize Swiper
let modulsSwiper = new Swiper(".modulsSwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  loop: true,
});

//  Initialize Swiper
let CustomersSwiper = new Swiper(".CustomersSwiper", {
  slidesPerView: 5,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
  },
});

//  Initialize Swiper
let MobileNav = new Swiper(".MobileNav", {
  slidesPerView: 3,
  loop: true,
  reverseDirection: true,
});
