const menuRefs = {
    openModalBtn: document.querySelector("[data-modal-open-btn]"),
    closeModalBtn: document.querySelector("[data-modal-close-btn]"),
    modalBackdrop: document.querySelector("[data-modal-backdrop]"),
    modalBox: document.querySelector(".rules__modal")
};

export function modalRules() {
    menuRefs.openModalBtn.addEventListener("click", toggleModal);
    menuRefs.closeModalBtn.addEventListener("click", toggleModal);
    menuRefs.modalBackdrop.addEventListener("click", closeModal);
    menuRefs.modalBox.addEventListener("click", e => e.stopPropagation());

    function toggleModal() {
        menuRefs.modalBackdrop.classList.toggle("is-hidden");
        document.body.classList.add('no-scroll');
        window.addEventListener('keydown', onKeyPressEsc);
    }
    
    function closeModal() {
        menuRefs.modalBackdrop.classList.add("is-hidden");
        document.body.classList.remove('no-scroll');
        window.removeEventListener('keydown', onKeyPressEsc);
    };

    function onKeyPressEsc(e) {
        if (e.code === 'Escape') {
            closeModal();
        }
}
};