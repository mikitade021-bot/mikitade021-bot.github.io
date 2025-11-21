var typed = new Typed(".text", {
    strings: ['Future Web Developer','Student Of Information System'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-xmark'); 
}); 

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let currentsection = "home";

    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const offset = section.offsetTop - 150; 
        
        if (scrollY >= offset) {
            currentsection = sectionId;
        }
    });

    
    navLinks.forEach(link => {
        link.classList.remove('active');

        let targetHref = link.getAttribute('href');
        
        if (targetHref === 'index.html' || targetHref === '#home') {
            if (currentsection === 'home') {
                 link.classList.add('active');
            }
        } 
        
        else if (targetHref.substring(1) === currentsection) {
            link.classList.add('active');
        }
    });

    
    header.classList.toggle("sticky", scrollY > 100);
});


navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbar.classList.contains("active")) {
            navbar.classList.remove("active");
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars"); 
        }
    });
});


function validateForm() {
    const name = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || phone === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    alert("Thank you for your message! I’ll get back to you soon. 💌");
    return true;
}


const themeToggle = document.getElementById("theme-toggle");
const body = document.body;


if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}


themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});