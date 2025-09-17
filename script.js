// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    // ======================= Efecto de Sombra en la Barra de Navegación al Hacer Scroll =======================
    const header = document.querySelector('.header');

    // Función que se ejecuta cada vez que el usuario hace scroll
    window.onscroll = function() {
        // Si el desplazamiento vertical es mayor a 50px, añade la clase 'scrolled'
        // De lo contrario, la remueve. Esta clase añade una sombra (definida en el CSS).
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // ======================= Desplazamiento Suave para los Enlaces de Navegación =======================
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previene el comportamiento por defecto del enlace (salto brusco)
            e.preventDefault();

            // Obtiene el ID de la sección a la que se quiere ir (ej. '#historia')
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Se desplaza suavemente hasta la sección deseada
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});