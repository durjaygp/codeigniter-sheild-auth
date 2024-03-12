export function alertModal() {

// Ventana del modal
    const alertModal = document.getElementById('alertModal');
    const alertYesBtn = document.getElementById('alertYesBtn');
// Parametros para mostrar el Alert Modal.
    const alertModalType = document.getElementById('alertModalType');
    const alertModalTitle = document.getElementById('alertModalTitle');
    const alertModalIcon = document.getElementById('alertModalIcon');
    const alertModalMessage = document.getElementById('alertModalMessage');
// Configura el listener para cada trigger
    document.body.addEventListener('click', function (e) {
        // Verifica si el elemento clickeado (o un ancestro) tiene la clase 'alertModalTrigger'
        let target = e.target;
        while (target !== document.body) {
            if (target.classList.contains('alertModalTrigger')) {
                const modalAlertType = target.dataset.typeAlertModal; // Por ejemplo, 'alert' o 'confirm'
                const modalAlertTitle = target.dataset.titleAlertModal;
                const modalAlertIcon = target.dataset.iconAlertModal;
                const modalAlertMessage = target.dataset.messageAlertModal;

                // Llama a una función para abrir el modal, pasando los datos como argumentos
                openAlertModal(modalAlertType, modalAlertTitle, modalAlertIcon, modalAlertMessage);
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
// Define el manejador de click para el botón de confirmación aquí para evitar reasignaciones
    const yesBtnClickHandler = function () {
        console.log('Yes clicked!');
        // Acción a realizar cuando se hace click en "Sí"
        closeAlertModal();
    };

// Define el manejador para clicks fuera del modal
    const outsideClickHandler = function (event) {
        if (event.target === alertModal) {
            closeAlertModal();
        }
    };

// Función para abrir el modal
    function openAlertModal(modalAlertType, modalAlertTitle, modalAlertIcon, modalAlertMessage) {
        // Actualiza el contenido del modal basado en los parámetros recibidos
        alertModalType.className = '';
        alertModalType.className = 'modal-content ' + modalAlertType;
        alertModalTitle.textContent = modalAlertTitle;
        // Para el icono, podrías cambiar la clase o el src si es una imagen, dependiendo de cómo esté implementado
        alertModalIcon.className = '';
        alertModalIcon.className = 'icon-emojiModal ' + modalAlertIcon;
        alertModalMessage.textContent = modalAlertMessage;

        // Muestra el modal
        alertModal.style.display = 'flex';
        alertYesBtn.addEventListener('click', yesBtnClickHandler);
        alertModal.addEventListener('click', outsideClickHandler); // Usa window para capturar clicks fuera del modal
    }

// Función para cerrar el modal
    function closeAlertModal() {
        alertModal.style.display = 'none';
        alertYesBtn.removeEventListener('click', yesBtnClickHandler);
        alertModal.removeEventListener('click', outsideClickHandler);
    }
}

