var saludoN = (function(nombre){
    return "Hola " + nombre;
})("Fernando");

let saludoF = (nombre => `Hola ${nombre}`)("Melissa");

console.log(saludoN);
console.log(saludoF);