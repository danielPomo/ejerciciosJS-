//5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

let documentos = []
class Persona {
    #nombre; #edad; #dni; #sexo; #peso; #altura; #anioDeNacimiento 
    constructor (nombre, edad, sexo, peso, altura, anioDeNacimiento) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#anioDeNacimiento = anioDeNacimiento;
    }
    mostrarGeneracion() {
        if (1930 <= this.#anioDeNacimiento && this.#anioDeNacimiento <= 1948) {
            document.write("Perteneces a la Silent Generation, te caracteriza tu austeridad")
        } else if (1949 <= this.#anioDeNacimiento && this.#anioDeNacimiento  <= 1968) {
            document.write("Perteneces a la Baby Boom, te caracterica tu ambición")
        } else if (1969 <= this.#anioDeNacimiento && this.#anioDeNacimiento  <= 1980) {
            document.write("Perteneces a la Generación X, te caracterica tu obsesión por el éxito")
        } else if (1981 <= this.#anioDeNacimiento && this.#anioDeNacimiento  <= 1993) {
            document.write("Perteneces a la Generación Y, te caracterica tu frustración")
        } else if (1994 <= this.#anioDeNacimiento && this.#anioDeNacimiento <= 2010) {
            document.write("Perteneces a la Generación Z, te caracterica tu irreverencia")
        }
    }
    verificarMayoriaDeEdad() {
        if (this.#edad > 21) {
            document.write(`${this.#nombre} es mayor de edad`)
        } else {
            document.write(`${this.#nombre} no 
            es mayor de edad`)
        }
    }
    mostrarDatos() {
        document.write(
            `
            <div class="card">
                <div class="card-body">
                    <h1 class="card-title"><span>Nombre: </span>${this.#nombre.toUpperCase()}</h1>
                    <h2 class="card-subtitle"><span>Edad: </span>${this.#edad}</h2>
                    <h2 class="card-subtitle"><span>DNI: </span>${this.generarDNI()}</h2>
                    <h2 class="card-subtitle"><span>Sexo: </span>${this.#sexo}</h2>
                    <h2 class="card-subtitle"><span>Peso: </span>${this.#peso} kg</h2>
                    <h2 class="card-subtitle"><span>Altura: </span>${this.#altura} cm</h2>
                    <h2 class="card-subtitle"><span>Año de Nacimiento: </span>${this.#anioDeNacimiento}</h2>
                </div>
            </div>
            `
        )
    }
    generarDNI() {
        let dni = Math.floor(10000000 + Math.random()* 90000000)
        return dni
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
    get sexo() {
        return this.#sexo
    }
    set sexo(valor) {
        this.#sexo = valor
    }
    get peso() {
        return this.#peso
    }
    set peso(valor) {
        this.#peso = valor
    }
    get altura() {
        return this.#altura
    }
    set altura(valor) {
        this.#altura = valor
    }
    get anioDeNacimiento() {
        return this.#anioDeNacimiento
    }
    set anioDeNacimiento(valor) {
        this.#anioDeNacimiento = valor
    }
}

const persona1 = new Persona("daniel", 28, "M", 90, 170, 1994)
const persona2 = new Persona("nicolas", 29, "M", 92, 170, 1994)
const persona3 = new Persona("alejandro", 45, "M", 95, 170, 1994)

let personas = [persona1, persona2, persona3]

personas.forEach( (persona) => persona.mostrarDatos()  )
