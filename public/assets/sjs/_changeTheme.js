// _themeToggle.js
export function toggleTheme() {

    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = themeToggleButton.querySelector('i');

    if (localStorage.getItem('theme_automatazen') === 'dark') {
        document.body.classList.add('dark');
        themeIcon.classList.remove('icon-moon');
        themeIcon.classList.add('icon-sun');
    }
    themeToggleButton.addEventListener('click', function() {
        console.log("i am working");
        document.body.classList.toggle('dark'); // Cambia el tema

        // Cambia el icono
        if (document.body.classList.contains('dark')) {
            themeIcon.classList.remove('icon-moon');
            themeIcon.classList.add('icon-sun');
            localStorage.setItem('theme_automatazen', 'dark');
        } else {
            themeIcon.classList.remove('icon-sun');
            themeIcon.classList.add('icon-moon');
            localStorage.removeItem('theme_automatazen');
        }
    });
}
