const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const aboutMenus = document.querySelectorAll('.submenu');

if (toggleBtn && toggleBtnIcon && dropDownMenu) {
  toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  };
}

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
});


