//2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

class Cuenta {
    #titular; #saldo
    constructor(titular, saldo) {
        this.#titular = titular;
        this.#saldo = saldo;
    }
    ingresar(dineroADepositar) {
        this.#saldo += dineroADepositar;
        alert(`La operación se ha realizado con éxito. Tu saldo actual es de $ ${this.#saldo}`)
    }
    extraer(dineroAExtraer) {
        if (this.#saldo >= dineroAExtraer) {
            this.#saldo -= dineroAExtraer;
            alert(`La operación se ha realizado con éxito. Tu saldo actual es de $ ${this.#saldo}`)
        } else {
            alert("Saldo insuficiente")
        }
    }
    informar() {
        alert(`Tu saldo actual es de $${this.#saldo}`)
    }
    get titular() {
        return this.#titular
    }
    set titular(nuevoTitular) {
        this.#titular = nuevoTitular 
    }
    get saldo() {
        return this.#saldo
    }
    set saldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo 
    }

}

const cuenta1 = new Cuenta("Alex", 0)

function ejecutarMetodosDeObjeto () {
    cuenta1.informar()
    cuenta1.ingresar(4500)
    cuenta1.extraer(2300)
    cuenta1.informar()
}

ejecutarMetodosDeObjeto()