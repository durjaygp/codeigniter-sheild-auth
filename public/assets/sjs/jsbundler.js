// jsbundler.js
import { toggleHamburger } from "./_hamburger";
import { alertModal } from './_alertModal';
import { toggleTheme } from './_changeTheme';


document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.getAttribute('data-page');
    console.log("i am wordinn");
    switch(page) {
        case 'ham-modalalert-themeswitch':
            alertModal();
            toggleHamburger();
            toggleTheme();
            break;
        case 'themeswitch':
            toggleTheme();
            break;
    }

});
