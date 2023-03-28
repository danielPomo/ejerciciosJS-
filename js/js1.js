//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    _color: "azul",
    _marca: "toyota",
    _modelo: 2018,
    _estaEncendido: false,
    encender() {
        if(this._estaEncendido) {
            alert("El auto ya estaba encendido")
        } else {
            alert("El auto se ha encendido")
            this._estaEncendido = true
        }
    },
    apagar() {
        if (this._estaEncendido) {
            alert("El auto se ha apagado")
            this._estaEncendido = false
        } else {
            alert("El autop ya estaba apagado")
        }
    },
    get color() {
        return _color
    },
    set color(nuevoColor) {
        _color = nuevoColor
    },
    get marca() {
        return _marca
    },
    set marca(nuevaMarca) {
        _marca = nuevaMarca
    },
    get modelo() {
        return _modelo
    },
    set modelo(nuevoModelo) {
        _modelo = nuevoModelo
    },
    get estaEncendido() {
        return _estaEncendido
    },
    set estaEncendido(nuevoEstaEncendido) {
        _estaEncendido =(nuevoEstaEncendido)    
    }
}