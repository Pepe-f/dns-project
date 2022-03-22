const offerSlider = new Swiper(".offer-slider", {
  // Optional parameters
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
