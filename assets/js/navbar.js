const hamburger = document.querySelector(".hamburger");
const hiddenNav = document.querySelector(".hiddenNavbar");
const close = document.querySelector(".hiddenNavbar_close");

hamburger.addEventListener("click", () => {
  hiddenNav.classList.add("show");
});
close.addEventListener("click", () => {
  hiddenNav.classList.remove("show");
});
