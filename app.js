const popupConsult = document.querySelector(".need-consult-popup");
const popupOverlay = document.querySelector(".popup-overlay");
const openButton = document.querySelector(".get-consult-button");
const popupButtonClose = popupConsult.querySelector('.popup__button__close');
const popupMessageButtonClose = popupConsult.querySelector('.popup__message__button__close');
const popupContent = popupConsult.querySelector(".popup__content");
const form = popupConsult.querySelector(".popup__form");
const popupMessage = popupConsult.querySelector('.popup__message');
const body = document.body;


const centerPopup = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop; // Current scroll position
    const windowHeight = window.innerHeight; // Viewport height
    const popupHeight = popupConsult.offsetHeight; // Popup height

    // Calculate the top position to center the popup vertically
    const topPosition = scrollTop + (windowHeight / 2) - (popupHeight / 12);

    // Set the popup's top position
    popupConsult.style.top = `${topPosition}px`;
};
// Функция открытия попапа
const openPopup = () => {
    popupConsult.style.display = "block";
    popupOverlay.style.display = "block";
    body.style.overflow = "hidden";
    body.style.overflow = "hidden"; // Блокировка прокрутки фона
    body.style.backdropFilter = "blur(5px)"; // Размытие фона
    openButton.classList.add('get-consult-button-active');
    popupOverlay.addEventListener("click", closePopup);
    popupButtonClose.addEventListener("click", closePopup);
    popupMessageButtonClose.addEventListener("click", closePopup);
    centerPopup();
};

// Функция закрытия попапа
const closePopup = () => {
    popupConsult.style.display = "none";
    popupOverlay.style.display = "none";
    body.style.overflow = ""; // Разблокировка прокрутки фона
    body.style.backdropFilter = ""; // Удаление размытия фона
    popupOverlay.removeEventListener("click", closePopup);
    popupButtonClose.removeEventListener("click", closePopup);
    popupMessageButtonClose.removeEventListener("click", closePopup);
    form.reset();
};

// Открытие попапа при клике на кнопку
openButton.addEventListener("click", openPopup);


// Обработка отправки формы
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let isValid = true;
    inputs.forEach((input) => {
        if (!input.checkValidity()) {
            isValid = false;
        }
    });

    if (isValid) {
        popupContent.innerHTML = '';
        popupContent.prepend(popupMessage);
        popupMessage.style.display = "block";

        setTimeout(closePopup, 2000);
    }
});