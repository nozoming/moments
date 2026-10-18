const drawerToggle =document.querySelector("#drawer-toggle");
const drawer =document.querySelector("#drawer");
drawerToggle.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("is-open");
    drawerToggle.setAttribute("aria-expanded", isOpen);
});




























