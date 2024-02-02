// Agrega interactividad si es necesario
// Por ejemplo, puedes agregar un efecto de parpadeo al título

const title = document.querySelector('.animated-title');

setInterval(() => {
    title.classList.toggle('blink');
}, 1000);


document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('.imagen');
    let currentIndex = 0;
  
    imagenes.forEach((imagen, index) => {
      imagen.addEventListener('click', () => {
        // Oculta la imagen actual
        imagenes[currentIndex].style.opacity = '0';
  
        // Calcula la posición de la siguiente imagen (circular, vuelve a la primera si llega al final)
        currentIndex = (index + 1) % imagenes.length;
  
        // Muestra la siguiente imagen
        imagenes[currentIndex].style.opacity = '1';
      });
    });
  
    // Mostrar la primera imagen inicialmente
    imagenes[currentIndex].style.opacity = '1';
  });
  
