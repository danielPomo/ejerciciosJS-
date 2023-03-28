//3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    #alto; #ancho
    constructor(alto, ancho) {
            this.#alto = alto;
            this.#ancho = ancho;
    }
    calcularPerimetro(){
        let perimetro = 2 * (this.#alto + this.#ancho)
        document.write(`El perímetro del rectángulo es ${perimetro} unidades`)
    }
    calcularArea(){
        let area = this.#alto * this.#ancho
        document.write(`El área del rectángulo es ${area} unidades cuadradas`)
    }
    get alto() {
        return this.#alto
    }
    set alto(nuevaAltura) {
        this.#alto = nuevaAltura
    }
    get ancho() {
        return this.#ancho
    }
    set ancho(nuevoAncho) {
        this.#ancho = nuevoAncho
    }
}


