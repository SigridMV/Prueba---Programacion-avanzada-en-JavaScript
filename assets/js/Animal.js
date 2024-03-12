/**
 * Clase Animal que representa a un animal con nombre, edad, imagen, comentarios y sonido.
 */
export default class Animal {
  //Constructor de la clase Animal
  constructor(nombre, edad, comentarios) {
    this._nombre = nombre;
    this._edad = edad;
    this._comentarios = comentarios;

    this.getNombre = () => nombre;
    this.getEdad = () => edad;
    this.getComentarios = () => comentarios;
  }

  // Metodo getters
  get nombre() {
    return this.getNombre();
  }

  get edad() {
    return this.getEdad();
  }

  get comentarios() {
    return this.getComentarios();
  }

  //Metodo setters
  set comentarios(nuevo_comentario) {
    this._comentarios(nuevo_comentario);
  }
}
