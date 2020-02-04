let primerNombre = Symbol();
let segundoNombre = Symbol();
let persona = {
    [segundoNombre]: "Herrera"
};

persona[primerNombre] = "Fernando";
console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);
console.log(primerNombre);
console.log(segundoNombre);

let simbolo = Symbol('simbolo');
let simbolo1 = Symbol('simbolo');

console.log(simbolo == simbolo1);
console.log(simbolo === simbolo1);
console.log(Object.is(simbolo, simbolo1));