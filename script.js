// Espera a que el contenido del DOM est� completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    // ======================= Efecto de Sombra en la Barra de Navegaci�n al Hacer Scroll =======================
    const header = document.querySelector('.header');

    // Funci�n que se ejecuta cada vez que el usuario hace scroll
    window.onscroll = function() {
        // Si el desplazamiento vertical es mayor a 50px, a�ade la clase 'scrolled'
        // De lo contrario, la remueve. Esta clase a�ade una sombra (definida en el CSS).
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // ======================= Desplazamiento Suave para los Enlaces de Navegaci�n =======================
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previene el comportamiento por defecto del enlace (salto brusco)
            e.preventDefault();

            // Obtiene el ID de la secci�n a la que se quiere ir (ej. '#historia')
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Se desplaza suavemente hasta la secci�n deseada
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});