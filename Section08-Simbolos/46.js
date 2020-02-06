let id = Symbol.for('id');
let activo = Symbol.for('activo');

let persona = {
    [id]: "123",
    [activo]: true,
    ['codigo']: "XY123",
    nombre: "Fernando",
    apellido: "Apellido",
    edad: 31
};

console.log(Object.keys(persona));

for(let key in persona){
    console.log(key, persona[key]);
}

let simbolos = Object.getOwnPropertySymbols(persona);
console.log(simbolos);
for(let i in simbolos){
    console.log(i);
}