// Función para cambiar el tema
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeIcon(newTheme);
}

// Función para actualizar el ícono del botón
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' 
            ? '<span>☀️</span> <span>Claro</span>' 
            : '<span>🌙</span> <span>Oscuro</span>';
    }
}

// Cargar tema guardado al iniciar
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', loadTheme);

// Función para toggle del menú móvil
function toggleMenu() {
    const nav = document.getElementById('nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}

let lastScrollY = window.scrollY;
const header = document.getElementById('mainHeader');

// 1. Obtiene la altura real del header, incluyendo padding y border
const headerHeight = header.offsetHeight; 

window.addEventListener('scroll', () => {
    
    // Si la posición actual de scroll es mayor que la anterior (desplazamiento hacia abajo)...
    if (window.scrollY > lastScrollY && window.scrollY > headerHeight) { 
        // OCULTAR: Mueve el header completamente fuera de la vista hacia arriba
        header.style.top = `-${headerHeight}px`; 
    } 
    // Si la posición actual es menor que la anterior (desplazamiento hacia arriba)...
    else {
        // MOSTRAR: Lo devuelve a su posición original
        header.style.top = '0px';
    }

    // Actualiza la posición anterior para el siguiente ciclo
    lastScrollY = window.scrollY;
});