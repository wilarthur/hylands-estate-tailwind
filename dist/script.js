/* Accessible Accordion */

document.querySelectorAll("[aria-controls]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));

    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    panel.hidden = isExpanded;

    const chevron = button.querySelector("i");
    chevron.classList.toggle("rotate-180", !isExpanded);
  });
});
