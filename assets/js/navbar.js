const hamburger = document.querySelector(".hamburger");
const hiddenNav = document.querySelector(".hiddenNavbar");
const close = document.querySelector(".hiddenNavbar_close");

hamburger.addEventListener("click", () => {
  hiddenNav.classList.add("show");
});
close.addEventListener("click", () => {
  hiddenNav.classList.remove("show");
});

let scrollpos = window.scrollY;
const header = document.querySelector("nav");
const header_height = header.offsetHeight;
const add_class_on_scroll = () => header.classList.add("scrolled");
const remove_class_on_scroll = () => header.classList.remove("scrolled");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});
