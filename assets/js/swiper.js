var swiper = new Swiper(".mySlider", {
  simulateTouch: true,
  touchRatio: 2, // Enhanced sensitivity
  touchAngle: 50, // Wider angle for dragging
  freeMode: true, // Enable free dragging
  freeModeSticky: true, // Snap to the nearest slide after drag
  threshold: 3, // Minimal drag distance
  passiveListeners: true,
  speed: 400,
  loop: true,
  autoplay: {
    delay: 3000,       // Time between slides (in milliseconds)
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination", // Target the pagination container
    clickable: true, // Allows clicking on pagination bullets
    type: "bullets", // Options: 'bullets', 'fraction', 'progressbar', 'custom'
  },
  keyboard: true,
});
