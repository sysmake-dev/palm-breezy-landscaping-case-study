/* ================================
   DEFINING VARIABLES
================================ */

// Navigation Variables
const toggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

// Nav Dropdown Variables
const trigger = document.getElementById("services-trigger");
const menu = document.getElementById("services-menu");

/* ================================
   TOGGLE MENU
================================ */

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");

  const expanded = toggle.getAttribute("aria-expanded") === "true" || false;
  toggle.setAttribute("aria-expanded", !expanded);
});

/* ================================
   CLOSE ON LINK CLICK
================================ */

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  });
});

/* ================================
   CLOSE WHEN CLICKING OUTSIDE
================================ */

document.addEventListener("click", (event) => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickToggle = toggle.contains(event.target);

  if (!isClickInsideNav && !isClickToggle) {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }
});

/* ================================
   CLOSE WITH ESC KEY
================================ */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }
});

/* ================================
   NAV DROPDOWN TOGGLE
================================ */

trigger.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  menu.classList.toggle("dropdown-active");

  const expanded = trigger.getAttribute("aria-expanded") === "true";
  trigger.setAttribute("aria-expanded", !expanded);
});

/* Close when clicking outside */
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== trigger) {
    menu.classList.remove("dropdown-active");
    trigger.setAttribute("aria-expanded", "false");
  }
});
