let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('nav-toggle');
});
window.onscroll =() =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('nav-toggle');
}