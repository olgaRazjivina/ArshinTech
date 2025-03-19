const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const mobileNav = document.querySelector(".main-header__nav");
const mobileNavBtnIcon = document.querySelector(".mobile-nav-btn__icon");
const mobileNavLinks = document.querySelectorAll(".nav-list__link");

mobileNavBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("main-header__nav--opened");
  document.body.classList.toggle("no-scroll");

  if (mobileNav.classList.contains("main-header__nav--opened")) {
    mobileNavBtnIcon.src = "./img/icons/nav-btn-close.svg";
  } else {
    mobileNavBtnIcon.src = "./img/icons/nav-btn-open.svg";
  }
});

mobileNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileNav.classList.remove("main-header__nav--opened");
    document.body.classList.remove("no-scroll");
  });
});
