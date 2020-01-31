var miFuncionN = function(valor){
    return valor;
};

let miFuncionF = valor => valor;

var sumarN = function(num1, num2){
    return num1 + num2;
};

let sumarF = (num1, num2) => num1 + num2;

var saludarN = function(){
    return "Hola Mundo";
};

let  saludarF = () => "Hola Mundo";

var saludarPersonaN = function(nombre){
    var salida = "Hola, " + nombre;
    return salida;
};

let saludarPersonaF = nombre => {
    let salida = `Hola, ${nombre}`;
    return salida;
};

var obtenerLibroN = function(id){
    return {
        id:id,
        nombre: "Harry Potter"
    };
};

let obtenerLibroF = id => ({ id:id, nombre:"Harry Potter" });