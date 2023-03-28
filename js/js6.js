// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas
// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
    #isbn; #titulo; #autor; #paginas
    constructor( isbn, titulo, autor, paginas) {
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#paginas = paginas;
    }
    mostrarLibro() {
        document.write(`
        El libro ${this.#titulo} con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene ${this.#paginas} páginas
        <br/>`)
    }
    get isbn() {
        return this.#isbn
    }
    set isbn(valor) {
        this.#isbn = valor
    } 
    get titulo() {
        return this.#titulo
    }
    set titulo(valor) {
        this.#titulo = valor
    } 
    get autor() {
        return this.#autor
    }
    set autor(valor) {
        this.#autor = valor
    } 
    get paginas() {
        return this.#paginas
    }
    set paginas(valor) {
        this.#paginas = valor
    } 
}


const libro1 = new Libro(1526478595125, "Paper Towns", "John Green", 367)
const libro2 = new Libro(5264225564213, "Martín Fierro", "José Hernandez", 1265 )

libro1.mostrarLibro()
libro2.mostrarLibro()