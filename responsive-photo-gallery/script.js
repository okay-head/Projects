alert(" Fully responsive\n Try resizing the browser window")

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('burger');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});