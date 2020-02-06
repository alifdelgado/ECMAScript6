class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }

    decirNombre(){
        console.log(this.nombre);
    }

    [ nombreMetodo ](){
        console.log(this.nombre.toUpperCase());
    }

    static crear(nombre){
        return new Persona(nombre);
    }
}

let nombre = "Fernando";
let yo = Persona.crear(nombre);
console.log(yo);