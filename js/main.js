// burger menu
const btn = document.querySelector(".menu_btn");
const mobileMenu = document.querySelector(".mobile_menu");
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  mobileMenu.classList.toggle("show");
});

// swiper
const swiper = new Swiper(".feedback_swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  speed: 1000,
  effect: "slide",
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
// scroll animation
AOS.init();
// countdown
const countDay = document.getElementById("countDay");
const countHr = document.getElementById("countHr");
const countMin = document.getElementById("countMin");
const countSec = document.getElementById("countSec");
const startingDate = new Date().getTime();
const duration = 25 * 24 * 60 * 60 * 1000;
const endingDate = startingDate + duration;
setInterval(countDown, 1000);
countDown();

function countDown() {
  const now = new Date().getTime();
  let distance = endingDate - now;
  let dayForm = 24 * 60 * 60 * 1000;
  let hourForm = 60 * 60 * 1000;
  let secondForm = 60 * 1000;
  let milsecForm = 1000;

  let days = Math.floor(distance / dayForm);
  let hours = Math.floor((distance % dayForm) / hourForm);
  let minutes = Math.floor((distance % hourForm) / secondForm);
  let seconds = Math.floor((distance % secondForm) / milsecForm);

  countDay.textContent = days;
  countHr.textContent = hours;
  countMin.textContent = minutes;
  countSec.textContent = seconds;
}
