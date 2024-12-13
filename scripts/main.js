// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menü Funktion
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Buchungsformular Validierung
    const bookingForm = document.querySelector('.booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Formularfelder auslesen
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            // Einfache Validierung
            if (name && email && service && date && time) {
                alert(`Danke, ${name}! Dein Termin für ${service} am ${date} um ${time} wurde erfolgreich gebucht.`);
                bookingForm.reset();
            } else {
                alert('Bitte fülle alle Felder aus.');
            }
        });
    }

    // Smooth Scroll für Navigationslinks
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Schließe das Menü nach dem Klick (für mobile Geräte)
                navUl.classList.remove('active');
                hamburger.classList.remove('toggle');
            }
        });
    });
});

// Funktion für den "Jetzt Buchen" Button im Header
function scrollToBooking() {
    const bookingSection = document.querySelector('.booking-form-area');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
}