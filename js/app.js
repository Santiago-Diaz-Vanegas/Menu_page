const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const enlaces = document.querySelectorAll('.navegacion a'); 

document.addEventListener('DOMContentLoaded', () => {
    eventos();
    cargarImagenes();
});

const eventos = () => {
    menu.addEventListener('click', abrirMenu);
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const seccion = document.querySelector(enlace.getAttribute('href'));
            seccion.scrollIntoView({ behavior: 'smooth' });
            cerrarMenuDesdeEnlace();
        });
    });
}

// Función para abrir el menú
const abrirMenu = () => {
    navegacion.classList.remove('ocultar');
    navegacion.classList.remove('cerrar');
    botonCerrar();
}

const botonCerrar = () => {
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if (document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}

const cargarImagenes = () => {
    imagenes.forEach(imagen => {
        imagen.src = imagen.dataset.src;
    });
}

const cerrarMenu = (boton, overlay) => {
    boton.addEventListener('click', () => {
        overlay.remove(); // Elimina el filtro de inmediato
        navegacion.classList.add('cerrar');
        setTimeout(() => {
            navegacion.classList.add('ocultar');
            boton.remove();
        }, 500); // tiempo de la animación
    });

    overlay.onclick = function () {
        overlay.remove(); // Elimina el filtro de inmediato
        navegacion.classList.add('cerrar');
        setTimeout(() => {
            navegacion.classList.add('ocultar');
            boton.remove();
        }, 500); // tiempo de la animación
    }
}

// Función para cerrar el menú al hacer clic en un enlace
const cerrarMenuDesdeEnlace = () => {
    const overlay = document.querySelector('.pantalla-completa');
    const btnCerrar = document.querySelector('.btn-cerrar');
    if (overlay) overlay.remove(); // Elimina el filtro de inmediato
    navegacion.classList.add('cerrar');
    setTimeout(() => {
        navegacion.classList.add('ocultar');
        if (btnCerrar) btnCerrar.remove();
    }, 500); // tiempo de la animación
}
