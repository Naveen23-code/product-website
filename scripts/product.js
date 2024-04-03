new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const media = window.matchMedia("(width < 40em)");
const topNavMenu = document.querySelector(".topnav_menu");
const main = document.querySelector("main");
const body = document.querySelector("body");

function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
  topNavMenu.removeAttribute("inert");
  topNavMenu.removeAttribute("style");
  main.setAttribute("inert", "");
  bodyScrollLockUpgrade.disableBodyScroll(body);
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "false");
  topNavMenu.setAttribute("inert", "");
  main.removeAttribute("inert");
  bodyScrollLockUpgrade.enableBodyScroll(body);
  btnOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transition = "none";
  }, 500);
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    console.log("is mobile");
    topNavMenu.setAttribute("inert", "");
    topNavMenu.style.transition = "none";
  } else {
    // is tablet/desktop
    console.log("is desktop");
    closeMobileMenu();
    topNavMenu.removeAttribute("inert");
  }
}

setupTopNav(media);

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

media.addEventListener("change", function (e) {
  setupTopNav(e);
});
