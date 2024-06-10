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

  speed: 2000,
  effect: "slide",
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
  },
});
