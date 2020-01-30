function obtenerNombre(){
    return "Maria Perez";
}

let nombre = "Maria";
let apellido = "Perez";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido}`;
console.log(nombreCompleto2);

let nombreCompleto3 = `El nombre completo es ${obtenerNombre()}`;
console.log(nombreCompleto3);
