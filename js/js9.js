// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 

class Animal {
    #nombre; #edad
    constructor (nombre, edad) {
        this.#nombre = nombre
        this.#edad = edad
    }
    emitirSonido() {
        document.write(`Soy un animal y hago sonidos`)
    }
    get nombre() {
        return this.#nombre
    }
    set nombre(valor) {
        this.#nombre = valor
    }
    get edad() {
        return this.#edad
    }
    set edad(valor) {
        this.#edad = valor
    }
}

class Perro extends Animal {
    constructor (nombre, edad) {
        super (nombre, edad)
    }
}

//incompleto