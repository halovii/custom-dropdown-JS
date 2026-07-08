// custom dropdown using HTML, CSS, JS - 09/07/2026

const dropdown = document.querySelector('.dropdown');
const selectItemsCont = document.querySelector('.select-items-cont');
const arrowIcon = document.querySelector('#arrow');

document.addEventListener('DOMContentLoaded', init);

function init() {
    dropdown.addEventListener('click', (e) => {
        let clicked = e.target.closest('.select');

        if (!clicked) return;

        console.log(clicked);

        arrowIcon.classList.toggle('rotate');
        selectItemsCont.classList.toggle('hide');
    });
}