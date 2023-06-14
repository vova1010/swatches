var buttons = document.querySelectorAll('.container span');
var root = document.querySelector(':root');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        root.style.setProperty('--button-color', e.target.style.background);
    })
})