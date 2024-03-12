export function toggleHamburger() {
    const hamburger = document.querySelector('.headerMaster-navbar-hamburgerMenu-icon .hamburger');
    const menu = document.querySelector('.headerMaster-navbar-menu');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            menu.style.visibility = 'visible';
            menu.style.opacity = '1';
            menu.style.transform = 'scaleY(1)';
        } else {
            menu.style.opacity = '0';
            menu.style.transform = 'scaleY(0)';
            menu.addEventListener('transitionend', function e() {
                if (!hamburger.classList.contains('active')) {
                    menu.style.visibility = 'hidden';
                }
                menu.removeEventListener('transitionend', e);
            });
        }
    });
    // Manejar cambio de tamaño del viewport
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 834) {
            // Restablecer estilos para asegurar la visibilidad en pantallas más grandes
            menu.style.visibility = '';
            menu.style.opacity = '';
            menu.style.transform = '';
        }
    });

}
