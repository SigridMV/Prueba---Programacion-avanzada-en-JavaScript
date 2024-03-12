import Animal from './Animal.js';

class Leon extends Animal {
  constructor(nombre, edad, comentarios) {
    super(nombre, edad, comentarios);
    this.imagen = '../imgs/Leon.png';
    this.sonido = '../sounds/Rugido.mp3';
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, comentarios) {
    super(nombre, edad, comentarios);
    this.imagen = '../imgs/Lobo.jpg';
    this.sonido = '../sounds/Aullido.mp3';
  }
}

class Oso extends Animal {
  constructor(nombre, edad, comentarios) {
    super(nombre, edad, comentarios);
    this.imagen = '../imgs/Oso.jpg';
    this.sonido = '../sounds/Grunido.mp3';
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, comentarios) {
    super(nombre, edad, comentarios);
    this.imagen = '../imgs/Serpiente.jpg';
    this.sonido = '../sounds/Siseo.mp3';
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, comentarios) {
    super(nombre, edad, comentarios);
    this.imagen = '../imgs/Aguila.png';
    this.sonido = '../sounds/Chillido.mp3';
  }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
