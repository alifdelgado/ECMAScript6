let frutas = ["banano", "pera"];
let [fruta1, fruta2 = "manzana"] = frutas;
console.log(fruta1);
console.log(fruta2);

let opciones = {
    nombre: "Fernando"
};

let {nombre, apellido = "Herrera"} = opciones;
console.log(nombre, apellido);