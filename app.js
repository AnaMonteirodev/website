'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const switcher = document.querySelector('.btn');

    switcher.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        const isDarkTheme = document.body.classList.contains('dark-theme');

        if (isDarkTheme) {
            this.textContent = "Light";
        } else {
            this.textContent = "Dark";
        }

        console.log('Current class names: ' + document.body.className);
    });
});