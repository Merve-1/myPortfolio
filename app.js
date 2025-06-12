// FEATHER ICONS
feather.replace();

// VIDEO HOVER EFFECT
const videoList = [
    document.getElementById('projectVideo1'),
    document.getElementById('projectVideo2'),
    document.getElementById('projectVideo3')
];
const hoverSign = document.querySelector('.hover-sign');

videoList.forEach(video => {
    if (!video) return;
    video.addEventListener("mouseover", () => {
        video.play();
        hoverSign?.classList.add("active");
    });
    video.addEventListener("mouseout", () => {
        video.pause();
        hoverSign?.classList.remove("active");
    });
});

// SIDEBAR TOGGLE
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

menu?.addEventListener("click", () => {
    sideBar?.classList.remove("close-sidebar");
    sideBar?.classList.add("open-sidebar");
});

closeIcon?.addEventListener("click", () => {
    sideBar?.classList.remove("open-sidebar");
    sideBar?.classList.add("close-sidebar");
});

// MENU TOGGLE FOR MOBILE VIEW
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon?.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar?.classList.toggle('active');
});

// SCROLL ACTIVE LINK LOGIC
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    const top = window.scrollY;
    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                activeLink?.classList.add('active');
            });
        }
    });
});

// EMAIL FORM SUBMIT - Calls a secure backend API
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form?.addEventListener('submit', async event => {
        event.preventDefault();

        const data = {
            fullName: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: "Success!",
                    text: result.message || "Message sent successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: result.message || "Failed to send the message.",
                    icon: "error"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "An error occurred: " + error.message,
                icon: "error"
            });
        }
    });
});
