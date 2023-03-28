//4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
    #codigo; #nombre; #precio
    constructor ( codigo, nombre, precio ) {
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
    }
    imprimirDatos() {
        document.write(
            `
            <table class="table table-striped">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Código</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${this.#nombre}</td>
                    <td>$ ${this.#precio}</td>
                    <td>${this.#codigo}</td>
                </tr>
            </tbody>
        </table>`
        )
    }
    get nombre() {
        return this.#nombre
    }
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    get codigo() {
        return this.#codigo
    }
    set codigo(nuevoCodigo) {
        this.#codigo = nuevoCodigo
    }
    get precio() {
        return this.#precio
    }
    set precio(nuevoPrecio) {
        this.#precio = nuevoPrecio
    }
}

const prod1 = new Producto(1, "Bolso de mano", 1500)
const prod2 = new Producto(2, "Vestido de fiesta", 9500)
const prod3 = new Producto(3, "Bufanda", 500)

const products = [prod1, prod2, prod3]

products.forEach( ( product ) => product.imprimirDatos()  )
