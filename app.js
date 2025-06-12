// FEATHER ICONS
feather.replace();

// VIDEO HOVER EFFECT
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector('.hover-sign');
const videoList = [video1, video2, video3];

videoList.forEach(function (video) {
    if (!video) return;
    video.addEventListener("mouseover", function () {
        video.play();
        hoverSign?.classList.add("active");
    });
    video.addEventListener("mouseout", function () {
        video.pause();
        hoverSign?.classList.remove("active");
    });
});

// SIDEBAR TOGGLE
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

menu?.addEventListener("click", function () {
    sideBar?.classList.remove("close-sidebar");
    sideBar?.classList.add("open-sidebar");
});

closeIcon?.addEventListener("click", function () {
    sideBar?.classList.remove("open-sidebar");
    sideBar?.classList.add("close-sidebar");
});

// MENU TOGGLE FOR MOBILE VIEW (if needed)
let menuIcon = document.querySelector('#menu-icon'); // optional if using another icon
let navbar = document.querySelector('.navbar');
menuIcon?.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar?.classList.toggle('active');
});

// SCROLL ACTIVE LINK LOGIC
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const selector = `header nav a[href*="${id}"]`;
                let activeLink = document.querySelector(selector);
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });
});

// EMAIL FORM SUBMIT
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form?.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const bodyMessage = `
            Full Name: ${fullName} <br>
            Email: ${email} <br>
            Phone Number: ${phone} <br>
            Message: ${message}
        `;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "marwa.alazaab@gmail.com",
            Password: "CEF3C30BE1B940495C12FAA47432D1FD7C1B",
            To: 'marwa.alazaab@gmail.com',
            From: 'marwa.alazaab@gmail.com',
            Subject: subject,
            Body: bodyMessage
        }).then(response => {
            if (response === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to send the message.",
                    icon: "error"
                });
            }
        }).catch(error => {
            Swal.fire({
                title: "Error!",
                text: "An error occurred: " + error.message,
                icon: "error"
            });
        });
    });
});
