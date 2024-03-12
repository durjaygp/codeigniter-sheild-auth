// Ventana del modal
const formLoginModal = document.getElementById('formLoginModal');
const inicioBtn = document.getElementById('volver-inicio-btn');
// Configura el listener para cada trigger

inicioBtn.addEventListener('click', function(e) {
    e.preventDefault();
    closeFormLoginModal();
    closeMenuNav();
});

document.body.addEventListener('click', function(e) {
    // Verifica si el elemento clickeado (o un ancestro) tiene la clase 'alertModalTrigger'
    let target = e.target;
    while (target !== document.body) {
        if (target.classList.contains('formLoginModalTrigger')) {
            // Llama a una función para abrir el modal, pasando los datos como argumentos

            openFormLoginModal();
            return; // Detiene la función después de abrir el modal
        }
        // Otro caso, por ejemplo, para cerrar el modal
        /*else if (target.classList.contains('closeModalTrigger')) {
            closeAlertModal();
            return;
        }*/
        // Puedes añadir más casos aquí
        target = target.parentNode; // Sube un nivel en el DOM
    }
});
// Función para abrir el modal
export function openFormLoginModal() {
    // Muestra el modal
    formLoginModal.style.display = 'flex';
    /*alertYesBtn.addEventListener('click', yesBtnClickHandler);*/
    formLoginModal.addEventListener('click', outsideFormLoginClickHandler); // Usa window para capturar clicks fuera del modal
}
const outsideFormLoginClickHandler = function (event) {
    if (event.target === formLoginModal) {
        closeFormLoginModal();
        closeMenuNav();
    }
};
// Función para cerrar el modal
function closeFormLoginModal() {
    formLoginModal.style.display = 'none';
    formLoginModal.removeEventListener('click', outsideFormLoginClickHandler);
}

export function closeMenuNav() {
    const hamburger = document.querySelector('.headerMaster-navbar-hamburgerMenu-icon .hamburger');
    const menu = document.querySelector('.headerMaster-navbar-menu');
    if (hamburger.classList.contains('active')) {
        menu.style.opacity = '0';
        menu.style.transform = 'scaleY(0)';
        hamburger.classList.remove('active');

        // Espera a que finalice la transición antes de cambiar la visibilidad.
        menu.addEventListener('transitionend', function handleTransitionEnd(event) {
            // Asegúrate de que el evento 'transitionend' sea por la propiedad que deseas (e.g., opacity).
            if (event.propertyName === 'opacity') {
                menu.style.visibility = 'hidden';
                menu.removeEventListener('transitionend', handleTransitionEnd); // Limpia el evento.
            }
        });
    }
}
