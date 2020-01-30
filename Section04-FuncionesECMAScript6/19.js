let persona = {
    nombre: 'Fernando',
    edad: 33
};

let persona1 = {
    nombre: 'Juan',
    edad: 18,
    direccion: 'Residencial Bella Vista 233232',
    conduce: true,
    vehiculo: true,
    vegetariano: false,
    casado: true
};

// persona.direccion = persona1.direccion;
// persona1.direccion = 'Barrio del acantilado';
persona = {
    ...persona1,
    ...persona
};

console.log(persona);
console.log(persona1);