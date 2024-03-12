import { cargarImagen } from './Imagenes.js';
import { animales } from './Consulta.js';
import { Leon, Lobo, Oso, Serpiente, Aguila } from './TipoAnimal.js';

document.addEventListener('DOMContentLoaded', async () => {
  const selectAnimales = document.getElementById('animal');
  const btnRegistrar = document.getElementById('btnRegistrar');

  // Event listener para el cambio de animal seleccionado
  selectAnimales.addEventListener('change', async () => {
    const anim = selectAnimales.value;
    const data = await animales.getData();
    const animalSeleccionado = data.animales.find(
      (animal) => animal.name === anim
    );

    if (animalSeleccionado) {
      const imagenURL = await cargarImagen(
        `../../assets/imgs/${animalSeleccionado.imagen}`
      );
      mostrarImagenPrevia(imagenURL);
    }
  });

  // Event listener para el botón de agregar
  btnRegistrar.addEventListener('click', agregarAnimal);
});

async function agregarAnimal() {
  const nombre = document.getElementById('animal').value;
  const edad = document.getElementById('edad').value;
  const comentarios = document.getElementById('comentarios').value;

  let animal;

  // Crear instancia del animal seleccionado
  switch (nombre) {
    case 'Leon':
      animal = new Leon(nombre, edad, comentarios);
      break;
    case 'Lobo':
      animal = new Lobo(nombre, edad, comentarios);
      break;
    case 'Oso':
      animal = new Oso(nombre, edad, comentarios);
      break;
    case 'Serpiente':
      animal = new Serpiente(nombre, edad, comentarios);
      break;
    case 'Aguila':
      animal = new Aguila(nombre, edad, comentarios);
      break;
    default:
      console.error('Animal no reconocido');
      return;
  }

  // Obtener la URL de la imagen
  const imagenURL = await cargarImagen(`../../assets/imgs/${animal.imagen}`);

  // Agregar animal a la tabla
  agregarAnimalATabla(imagenURL, animal);
}

function agregarAnimalATabla(imagenURL, animal) {
  // Crear fila de la tabla con los datos del animal
  const tablaAnimales = document.getElementById('Animales');

  const fila = document.createElement('div');
  fila.classList.add('animal-row');

  fila.innerHTML = `
    <div class="animal-col">${animal.nombre}</div>
    <div class="animal-col">${animal.edad}</div>
    <div class="animal-col">
      <button class="btn btn-info btnDetalle">Detalles</button>
    </div>
  `;

  tablaAnimales.appendChild(fila);

  // Limpiar formulario después de agregar el animal
  limpiarFormulario();

  // Agregar event listener al botón de detalles
  const btnDetalle = fila.querySelector('.btnDetalle');
  btnDetalle.addEventListener('click', () => {
    mostrarDetalle(imagenURL, animal.nombre, animal.edad, animal.comentarios);
  });
}

function limpiarFormulario() {
  // Limpiar los campos del formulario
  document.getElementById('animal').selectedIndex = 0;
  document.getElementById('edad').selectedIndex = 0;
  document.getElementById('comentarios').value = '';

  // Limpiar la imagen previa
  mostrarImagenPrevia('');
}

function mostrarImagenPrevia(imagenURL) {
  const previewImagen = document.getElementById('preview');
  if (imagenURL) {
    previewImagen.innerHTML = `<img height='200px' src='${imagenURL}' style='display: block; margin: 0 auto;'>`;
  } else {
    previewImagen.innerHTML = '';
  }
}

function mostrarDetalle(imagenURL, nombre, edad, comentarios) {
  // Mostrar ventana modal con los detalles del animal
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = `
    <img src="${imagenURL}" alt="${nombre}" style="max-width: 100%;">
    <h5>Nombre: ${nombre}</h5>
    <h5>Edad: ${edad}</h5>
    <h5>Comentarios: ${comentarios}</h5>
  `;

  $('#exampleModal').modal('show');
}
