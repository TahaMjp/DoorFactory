let BannerSwiper = new Swiper(".BannerSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});

//  Initialize Swiper
let AboutBanner = new Swiper(".AboutBanner", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  Initialize Swiper
let modulsSwiper = new Swiper(".modulsSwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
