console.log('search.js cargado');

document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.querySelector('.search-form');
  const searchInput = searchForm ? searchForm.querySelector('input[name="search"]') : null;

  if (searchForm && searchInput) {
    console.log('Formulario de búsqueda y campo de entrada encontrados.');
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita la recarga de la página

      const query = searchInput.value.toLowerCase().trim();
      console.log('Consulta de búsqueda:', query);
      if (query) {
        highlightText(query);
      }
    });
  } else {
    console.error('Formulario de búsqueda o input no encontrado.');
  }

  function highlightText(query) {
    console.log('Resaltando texto con la consulta:', query);
    // Remover resaltados previos
    removeHighlights();

    const bodyText = document.body.innerHTML;
    const regex = new RegExp(`(${query})`, 'gi');

    if (bodyText.toLowerCase().includes(query)) {
      document.body.innerHTML = bodyText.replace(regex, '<span class="highlight">$1</span>');
      const firstHighlight = document.querySelector('.highlight');
      if (firstHighlight) {
        firstHighlight.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('No se encontraron resultados');
      }
    } else {
      alert('No se encontraron resultados');
    }
  }

  function removeHighlights() {
    console.log('Eliminando resaltados.');
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
      const parent = element.parentNode;
      parent.replaceChild(document.createTextNode(element.textContent), element);
      parent.normalize();
    });
  }
});
