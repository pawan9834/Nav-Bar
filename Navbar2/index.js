let menu = document.querySelector('#menu');
let navList = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}