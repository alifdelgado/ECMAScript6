function crearPersona(nombre, apellido, edad){
    return {
        nombre,
        apellido,
        edad
    };
}

var persona = crearPersona("Melissa", "Flores", 30);
console.log(persona);