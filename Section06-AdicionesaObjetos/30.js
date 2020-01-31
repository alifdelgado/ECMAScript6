var persona = {};
var apellido = "apellido";

persona["primer nombre"] = "Fernando";
persona[apellido] = "Herrera";

console.log(persona["primer nombre"]);
console.log(persona[apellido]);

var persona = {
    "primer nombre": "Melissa"
};

console.log(persona["primer nombre"]);

var persona = {
    "primer nombre": "Fernando",
    [apellido]: "Herrera"
};

console.log(persona["primer nombre"]);
console.log(persona[apellido]);