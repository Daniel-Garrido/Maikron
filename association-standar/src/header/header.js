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

      // Cerrar el menú desplegable al hacer clic en un enlace del menú "About"
      const links = dropdown.querySelectorAll('a');
      links.forEach(link => {
        link.onclick = function() {
          dropdown.classList.remove('open');
        };
      });
    };
  }
});
