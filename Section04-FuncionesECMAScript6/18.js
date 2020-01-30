let persona = {
    nombre: 'Fernando',
    edad: 33
};

let persona1 = {...persona};
persona1.nombre = 'Juan';
console.log(persona);
console.log(persona1);