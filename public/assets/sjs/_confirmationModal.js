/*
// alertModal.js

let yesBtnClickHandler;
let noBtnClickHandler;
let outsideClickHandler;

export function openModal(modal, yesBtn, noBtn) {
    modal.style.display = 'flex';

    yesBtnClickHandler = function () {
        closeModal(modal, yesBtn, noBtn);
        console.log('Yes clicked!');
        // Perform the action here
    };

    noBtnClickHandler = function () {
        closeModal(modal, yesBtn, noBtn);
        console.log('No clicked!');
    };

    // New event listener for outside clicks
    outsideClickHandler = function (event) {
        if (event.target === modal) {
            closeModal(modal, yesBtn, noBtn);
        }
    };

    yesBtn.addEventListener('click', yesBtnClickHandler);
    noBtn.addEventListener('click', noBtnClickHandler);
    modal.addEventListener('click', outsideClickHandler);
}

export function closeModal(modal, yesBtn, noBtn) {
    modal.style.display = 'none';

    // Remove the eventListeners
    yesBtn.removeEventListener('click', yesBtnClickHandler);
    noBtn.removeEventListener('click', noBtnClickHandler);
    modal.removeEventListener('click', outsideClickHandler);  // Remove outsideClickHandler listener
}*/
