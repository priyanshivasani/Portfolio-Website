// const menuIcon = document.querySelector('#menu-icon');
// const navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }



const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// Close menu when a link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    };
});