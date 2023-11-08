let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onlick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// function toggleMode() {
//     const body = document.body;

//     body.classList.toggle("dark-mode");
//     const button = document.getElementById("toggleButton");
//     if (body.classList.contains("dark-mode")) {
//       button.innerHTML = '<i class="fas fa-toggle-on"></i>';
//     } else {
//       button.innerHTML = '<i class="fas fa-toggle-off"></i>';
//     }
//   }
