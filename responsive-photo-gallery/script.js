let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('burger');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});