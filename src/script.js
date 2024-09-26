// Agrega interactividad con JavaScript

// Cuando el botón de contacto es clickeado, muestra una alerta
document.getElementById('contactBtn').addEventListener('click', function() {
    alert('Gracias por contactarnos. Pronto nos pondremos en contacto contigo.');
});

// Dinamismo: cambia el color del encabezado cuando se pasa el mouse
let header = document.querySelector('header');

header.addEventListener('mouseover', function() {
    header.style.backgroundColor = '#45a049';
});

header.addEventListener('mouseout', function() {
    header.style.backgroundColor = '#4CAF50';
});

// Dinamismo: efecto de cambio de color en los enlaces del menú
let navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        link.style.color = '#45a049';
    });

    link.addEventListener('mouseout', function() {
        link.style.color = '#fff';
    });
});
