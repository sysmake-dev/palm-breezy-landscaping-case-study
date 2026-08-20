/* ================================
   DEFINING VARIABLES
================================ */

// Navigation Variables
const toggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

// Services Panel Variables
const servicesToggle = document.querySelector(".nav__services-toggle");
const servicesPanel = document.querySelector(".services__panel");
const servicesArrow = document.querySelector(".nav__services-arrow");

/* ================================
   TOGGLE MENU
================================ */

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");

  const expanded = toggle.getAttribute("aria-expanded") === "true";
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

    servicesPanel.classList.remove("active");
    servicesToggle.setAttribute("aria-expanded", "false");
    servicesArrow.classList.remove("active");
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

    servicesPanel.classList.remove("active");
    servicesToggle.setAttribute("aria-expanded", "false");
    servicesArrow.classList.remove("active");
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

    servicesPanel.classList.remove("active");
    servicesToggle.setAttribute("aria-expanded", "false");
    servicesArrow.classList.remove("active");
  }
});

/* ================================
   SERVICES PANEL TOGGLE
================================ */

servicesToggle.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  servicesPanel.classList.toggle("active");
  servicesArrow.classList.toggle("active");

  const expanded = servicesToggle.getAttribute("aria-expanded") === "true";

  servicesToggle.setAttribute("aria-expanded", !expanded);
});

/* ================================
   CLOSE SERVICES PANEL OUTSIDE
================================ */

document.addEventListener("click", (event) => {
  const isInsideServices = servicesToggle.contains(event.target);
  const isInsidePanel = servicesPanel.contains(event.target);

  if (!isInsideServices && !isInsidePanel) {
    servicesPanel.classList.remove("active");
    servicesArrow.classList.remove("active");
    servicesToggle.setAttribute("aria-expanded", "false");
  }
});
