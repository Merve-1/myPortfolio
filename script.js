window.onscroll = function() {
    document.querySelectorAll('header nav a').forEach(link => {
        let hrefValue = link.getAttribute('href'); // Correctly calling getAttribute
        if (document.querySelector(`header nav a[href*="${hrefValue}"]`)) {
            // Do something
        }
    });
};


//swiper 
const swiper = new Swiper('.swiper-container', {
          
    spaceBetween: 40,
    grabCursor: true,
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
     
        },
        768: {
            slidesPerView: 2,
     
        },
        1024: {
            slidesPerView: 3,
          
        },
    },
});

//menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a[href*="some-value"]');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;
        
        if(top >= offset && top < offset + height ){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//send mail
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form data
        const fullName = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Construct the body message
        const bodyMessage = `Full Name: ${fullName} <br> Email: ${email} <br> Phone Number: ${phone} <br> Message: ${message}`;
        
        // Send email using Email.js
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "marwa.alazaab@gmail.com",
            Password: "CEF3C30BE1B940495C12FAA47432D1FD7C1B",
            To: 'marwa.alazaab@gmail.com',
            From: 'marwa.alazaab@gmail.com',
            Subject: subject,
            Body: bodyMessage
        }).then(
            message => {
                if (message === "OK") {
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
            }
        ).catch(error => {
            Swal.fire({
                title: "Error!",
                text: "An error occurred: " + error.message,
                icon: "error"
            });
        });
    });
});
