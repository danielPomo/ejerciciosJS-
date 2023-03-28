/*
7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
Los métodos de la agenda serán los siguientes:
    ok  aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
    ok  existeContacto(Contacto): indica si el contacto pasado existe o no.
    ok  listarContactos(): Lista toda la agenda
    ok  buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
    ok  eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
    ok  agendaLlena(): indica si la agenda está llena.
    ok  huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class Contacto {
    #nombre; #telefono
    constructor (nombre, telefono) {
        this.#nombre = nombre
        this.#telefono = telefono
    }
    get nombre() {
        return this.#nombre
    }
    set nombre(valor) {
        this.#nombre = valor
    }
    get telefono() {
        return this.#telefono
    }
    set telefono(valor) {
        this.#telefono = valor
    }
}

const contacto1 = new Contacto ("Daniel P", 3876194290)
const contacto2 = new Contacto ("Leonardo C", 3815646263)
const contacto3 = new Contacto ("Ivana F", 3514568985)
const contacto4 = new Contacto ("Daniel P", 3876194294)
const contacto5 = new Contacto ("Lorena J", 3815232325)

let espacioDeAgenda = (+ prompt("Ingrese la cantidad de contactos que podrá almacenar la agenda", 10)) || 10

function ejecutarMenuDeOpciones () {
    let opcion = +prompt(`Empieza a gestionar tus contactos! Marca la opción que corresponda:
    1 Añadir contacto 
    2 Ver si existe un contacto en la agenda 
    3 Mostrar todos los contactos de la agenda 
    4 Buscar un contacto por su nombre 
    5 Eliminar un contacto 
    6 Ver si la agenda está llena 
    7 Ver el espacio disponible para almacenar contactos`)
    switch (opcion) {
        case 1:
            agenda.aniadirContacto()
            break;
        case 2:
            agenda.existeContacto()
            break;
        case 3:
            () => agenda.listarContactos()
            break;
        case 4:
            agenda.buscarContacto
            break;
        case 5:
            agenda.eliminarContacto
            break;
        case 6:
            () => agenda.agendaLlena()
            break;
        case 7:
            () => agenda.huecosLibres()
            break;
        default:
            break;
    }
}

const agenda = {
    _contactos: [],
    existeContacto() {
        let nuevoContacto = {}
        nuevoContacto.nombre = prompt("Ingrese el nombre del contacto para verificar si existe en la agenda")
        let nombresDeContactos = []
        for (let contacto of this._contactos) {
            nombresDeContactos.push(contacto["nombre"])
        }
        if (nombresDeContactos.includes(nuevoContacto["nombre"])) {
            console.log("El contacto ya existe en la agenda, agregarlo nuevamente actualizará el teléfono")
            document.write("El contacto ya existe en la agenda, agregarlo nuevamente actualizará el teléfono")
            return true

        } else {
            console.log("El contacto aún no existe en al agenda")
            document.write("El contacto aún no existe en al agenda")
            return false
        }
    },
    buscarContacto(nombre) {
        let index = this._contactos.findIndex( (contacto) =>  nombre === contacto["nombre"] )
        console.log(this._contactos[index])
        return index
    },
    agendaLlena() {
        if (this._contactos.length === espacioDeAgenda) {
            console.log("La agenda está llena")
            return true
        } else {
            console.log("La agenda aún no está llena")
        }
    },
    huecosLibres() {
        if (this._contactos.length === espacioDeAgenda) {
            console.log("La agenda está llena")
            return true
        } else {
            console.log(`Aún quedan disponibles ${ espacioDeAgenda - this._contactos.length} tarjetas de contacto.`)
            return false
        }
    },
    aniadirContacto() {
        let nuevoContacto = {}
        nuevoContacto.nombre = prompt("Ingrese el nombre del contacto")
        nuevoContacto.telefono = prompt("Ingrese el telefono del contacto")
        if (this.agendaLlena()) {
            console.log("La agenda está llena, elimina un contacto para poder agregar otro.")
        } else {
            if (this.existeContacto(nuevoContacto)) {
                console.log("El contacto ya existe, agregarlo nuevamente actualizará el teléfono")
                let index = this._contactos.findIndex( (contacto) =>  nuevoContacto.nombre === contacto.nombre )
                this._contactos[index]["telefono"] = nuevoContacto["telefono"]
            } else {
                this._contactos.push(nuevoContacto)
                console.log(`Se ha añadido a ${nuevoContacto.nombre} a tu lista de contactos`)
                document.write(`Se ha añadido a ${nuevoContacto.nombre} a tu lista de contactos`)
            }
        }
    },
    listarContactos() {
        this._contactos.map( contacto => {
            console.log(`Nombre: ${contacto["nombre"]} ---> Teléfono: ${contacto["telefono"]} <br/>`)
            return (
                document.write(`Nombre: ${contacto["nombre"]} ---> Teléfono: ${contacto["telefono"]} <br/>`)
            )
        } )
    },
    eliminarContacto(nombre) {
        let indiceAEliminar = this.buscarContacto(nombre)
        if (indiceAEliminar >= 0) {
            this._contactos.splice(indiceAEliminar,1)
            document.write(`${nombre} ha sido eliminado con éxito de tu lista de contactos`)
        } else {
            document.write(`No hemos encontrado un contacto cuyo nombre coincida con el proporcionado: ${nombre} no es actualmente parte de tu agenda.`)
        }
    },
}

ejecutarMenuDeOpciones()