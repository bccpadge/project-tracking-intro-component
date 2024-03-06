// declare variables
const toggler = document.querySelector("[data-js-toggle]"),
  navbarList = document.querySelector("[data-js-list]");

toggler.addEventListener("click", () => {
  navbarList.hasAttribute("active")
    ? toggler.setAttribute("aria-expanded", "false")
    : toggler.setAttribute("aria-expanded", "true");
  navbarList.toggleAttribute("active");
});
