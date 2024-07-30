const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const aboutMenus = document.querySelectorAll('.submenu');

if (toggleBtn && toggleBtnIcon && dropDownMenu) {
  toggleBtn.addEventListener('click', function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });

  aboutMenus.forEach(menu => {
    const actionBtn = menu.querySelector('.action_btn');
    const dropdown = menu.querySelector('.dropdown');

    if (actionBtn && dropdown) {
      actionBtn.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('open');
        
        // Si se abre el submenú 'About', cerrar el menú responsivo principal
        if (dropdown.classList.contains('open')) {
          dropDownMenu.classList.remove('open');
        }
      });

      const links = dropdown.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          dropdown.classList.remove('open'); // Cerrar el submenú 'About'
          dropDownMenu.classList.remove('open'); // Cerrar el menú responsivo principal al hacer clic en un enlace del submenú
          
          const contentPath = link.getAttribute('href'); // Obtener la URL del atributo href del enlace
          loadContent(contentPath); // Cargar el contenido correspondiente
        });
      });
    }
  });

  // Cerrar el menú responsivo al hacer clic en cualquier enlace del menú responsivo
  const responsiveLinks = dropDownMenu.querySelectorAll('a');
  responsiveLinks.forEach(link => {
    link.addEventListener('click', function() {
      dropDownMenu.classList.remove('open');
      toggleBtnIcon.className = 'fa-solid fa-bars'; // Restaurar el ícono del botón de menú a su estado inicial
    });
  });
}


/* funciona pero no correctamente

aboutMenus.forEach(menu => {
  const actionBtn = menu.querySelector('.action_btn');
  const dropdown = menu.querySelector('.dropdown');

  if (actionBtn && dropdown) {
    actionBtn.onclick = function(e) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    };

    // Manejar clics en los enlaces del menú desplegable
    const links = dropdown.querySelectorAll('a');
    links.forEach(link => {
      link.onclick = function(e) {
        const isResponsive = window.innerWidth <= 1040; // Tamaño de pantalla para responsive
        if (isResponsive) {
          e.preventDefault();
          dropdown.classList.remove('open');
          const contentPath = link.getAttribute('href');
          loadContent(contentPath); // Ajusta esto según cómo cargues el contenido dinámicamente
        } else {
          // Para pantallas no responsive, no prevenimos el comportamiento por defecto
          dropdown.classList.remove('open');
        }
      };
    });
  }
});*/


/* original

aboutMenus.forEach(menu => {
  const actionBtn = menu.querySelector('.action_btn');
  const dropdown = menu.querySelector('.dropdown');

  if (actionBtn && dropdown) {
    actionBtn.onclick = function(e) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    };

    // Manejar clics en los enlaces del menú desplegable
    const links = dropdown.querySelectorAll('a');
    links.forEach(link => {
      link.onclick = function(e) {
        e.preventDefault();
        dropdown.classList.remove('open');
        const contentPath = link.getAttribute('href');
        loadContent(contentPath); // Ajusta esto según cómo cargues el contenido dinámicamente
      };
    });
  }
});*/


