$(".banner").parallax({ imageSrc: "../img/banner-bg.jpg", speed: 0.7 });
$(".offer").parallax({ imageSrc: "../img/banner-bg-2.jpg", speed: 0.7 });

const offerSlider = new Swiper(".offer-slider", {
  // Optional parameters
  loop: true,

  pagination: {
    el: ".offer-slider__pagination",
    type: "bullets",
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
