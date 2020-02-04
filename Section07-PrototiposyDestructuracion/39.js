let colores = ["rojo", ["verde", "amarillo"], "morado", "naranja"];
let [color1, [color2]] = colores;

console.log(color1);
console.log(color2);

let colores1 = ["rojo", "verde", "amarillo", "morado", "naranja"];

let [color3, ...demasColores] = colores1;

console.log(color3);
console.log(demasColores);