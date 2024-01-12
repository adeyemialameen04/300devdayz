const toggleNavBtn = document.getElementById("toggle-nav");
const navLinks = document.getElementById("nav-links");
const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close");

const SHOW_NAV = "show-nav";
const HIDE = "hide";
const SHOW = "show";

toggleNavBtn.addEventListener("click", () => {
  navLinks.classList.toggle(SHOW_NAV);
  if (navLinks.classList.contains(SHOW_NAV)) {
    closeBtn.classList.remove(HIDE);
    hamburgerBtn.classList.add(HIDE);
  } else {
    closeBtn.classList.add(HIDE);
    hamburgerBtn.classList.remove(HIDE);
  }
});
