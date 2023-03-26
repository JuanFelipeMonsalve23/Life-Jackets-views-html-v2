                // Abrir ventana de registrar
const openModal = document.querySelector(".buttonSearch");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modalClose");

openModal.addEventListener("click" ,(e) => {
    e.preventDefault();
    modal.classList.add("modal--show");
});

closeModal.addEventListener("click" ,(e) => {
    e.preventDefault();
    modal.classList.remove("modal--show");
});


                // Abrir Ventana de ver
const openModalView = document.querySelector(".buttonView");
const modalView = document.querySelector(".modalView");
const closeModalView = document.querySelector(".modalViewClose");

openModalView.addEventListener("click" ,(e) => {
    e.preventDefault();
    modalView.classList.add("modalView--show");
});

closeModalView.addEventListener("click" ,(e) => {
    e.preventDefault();
    modalView.classList.remove("modalView--show");
});


                // Abrir Ventana de edición
const openModalEdit = document.querySelector(".buttonEdit");
const modalEdit = document.querySelector(".modalEdit");
const closeModalEdit = document.querySelector(".modalEditClose");

openModalEdit.addEventListener("click" ,(e) => {
    e.preventDefault();
    modalEdit.classList.add("modalEdit--show");
});

closeModalEdit.addEventListener("click" ,(e) => {
    e.preventDefault();
    modalEdit.classList.remove("modalEdit--show");
});


                // Abrir Ventana de confirmacíon
const openModalAlert = document.querySelector(".buttonStatus");
const modalAlert = document.querySelector(".modalAlert");
const closeModalAlert = document.querySelector(".cancelAert");

openModalAlert.addEventListener("click",(e) => {
    e.preventDefault();
    modalAlert.classList.add("modalAlert--show");
})

closeModalAlert.addEventListener("click",(e) => {
    e.preventDefault();
    modalAlert.classList.remove("modalAlert--show");
})

