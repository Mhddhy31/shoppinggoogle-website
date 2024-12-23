let menu = document.querySelectorAll('#menu-icon');
let navlist = document.querySelectorAll('.navlist');

mwnu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}
