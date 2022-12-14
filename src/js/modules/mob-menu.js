const menuRefs = {
    openMenuBtn: document.querySelector("[data-menu-open-btn]"),
    closeMenuBtn: document.querySelector("[data-menu-close-btn]"),
    menuBackdrop: document.querySelector("[data-menu-backdrop]"),
    menuList: document.querySelector(".mob-menu__list")
};

export function mobMenu() {
    menuRefs.openMenuBtn.addEventListener("click", toggleMenu);
    menuRefs.closeMenuBtn.addEventListener("click", toggleMenu);
    menuRefs.menuBackdrop.addEventListener("click", closeMenu);
    menuRefs.menuList.addEventListener("click", closeMenu);

    function toggleMenu() {
        menuRefs.menuBackdrop.classList.toggle("is-hidden");
        document.body.classList.add('no-scroll');
    }
    
    function closeMenu() {
        menuRefs.menuBackdrop.classList.add("is-hidden");
        document.body.classList.remove('no-scroll');
    };
};