const btn = document.querySelector(".menu_btn");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
});

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
