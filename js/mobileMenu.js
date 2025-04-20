let mobileMenuBars = document.getElementById("mobileMenuBars");
let mobileMenu = document.getElementById("mobileMenu");
let mobileMenuClose = document.getElementById("mobileMenuClose");
mobileMenuBars.addEventListener("click", function () {
  mobileMenu.classList.remove("translate-x-60");
});

mobileMenuClose.addEventListener("click", function () {
  mobileMenu.classList.add("translate-x-60");
});
