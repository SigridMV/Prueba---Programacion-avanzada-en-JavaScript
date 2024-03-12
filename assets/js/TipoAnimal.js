import Animal from './Animal.js';

class Leon extends Animal {
  constructor(nombre, edad, comentarios) {
    super(nombre, edad, comentarios);
    this.imagen = '../../assets/imgs/Leon.png';
    this.sonido = '../../assets/sounds/Rugido.mp3';
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, comentarios) {
    super(nombre, edad, comentarios);
    this.imagen = '../../assets/imgs/Lobo.jpg';
    this.sonido = '../../assets/sounds/Aullido.mp3';
  }
}

class Oso extends Animal {
  constructor(nombre, edad, comentarios) {
    super(nombre, edad, comentarios);
    this.imagen = '../../assets/imgs/Oso.jpg';
    this.sonido = '../../assets/sounds/Grunido.mp3';
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, comentarios) {
    super(nombre, edad, comentarios);
    this.imagen = '../../assets/imgs/Serpiente.jpg';
    this.sonido = '../../assets/sounds/Siseo.mp3';
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
