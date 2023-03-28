//8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
    #nombre; #edad; #profesion
    constructor (nombre, edad, profesion) {
        this.#nombre = nombre
        this.#edad = edad
        this.#profesion = profesion
    }
    saludar() {
        document.write(`Hola! Me llamo ${this.#nombre}, tengo ${this.#edad} años y soy ${this.#profesion}`)
    }
    despedirse() {
        document.write("Chau!")
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
    get profesion() {
        return this.#profesion
    }
    set profesion(valor) {
        this.#profesion = valor
    }
}

const persona1 = new Persona ("Lucas", 38, "científico de cohetes")
const persona2 = new Persona ("Esmeralda", 29, "vedette")

let personas = [persona1, persona2]

personas.forEach( persona => {
    persona.saludar()
    document.write("<br/>")
    persona.despedirse()
    document.write("<br/>")
} )