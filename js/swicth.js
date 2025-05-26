document.addEventListener('DOMContentLoaded', () => {
    let currentTheme = document.querySelector('html');
    let clickTheme = document.getElementById('clickTheme');
    let setTheme = document.querySelector('.set-theme');

    clickTheme.addEventListener('click', () => {
        if (currentTheme.getAttribute('data-bs-theme') === 'light') {
            currentTheme.setAttribute('data-bs-theme', 'dark');
            setTheme.src = '/img/dark.png';
        } else {
            currentTheme.setAttribute('data-bs-theme', 'light');
            setTheme.src = '/img/light.png';
        }
    });

});