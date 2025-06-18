export default function sliders() {
  const careSlider = document.querySelector(".s-care__slider");

  if (careSlider) {
    const swiper = new Swiper(careSlider, {
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".s-care .slider-btn._prev",
        nextEl: ".s-care .slider-btn._next",
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  const aboutSlider = document.querySelector(".s-about__slider");

  if (aboutSlider) {
    const swiper = new Swiper(aboutSlider, {
      speed: 800,
      slidesPerView: 2,
      spaceBetween: 25, 
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }
}
