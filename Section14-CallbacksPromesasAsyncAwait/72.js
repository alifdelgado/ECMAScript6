const empleados = [{id:1, nombre: 'Fernando'},{id:2, nombre: 'Melissa'},{id:3, nombre: 'Juan'}];
const salarios  = [{id:1, salario:1000},{id:2, salario:2000}];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleadoDB = empleados.find(empleado => empleado.id === id);
        if(!empleadoDB){
            reject(`No existe el empleado con el id ${id}`);
        }else {
            resolve(empleadoDB);
        }
    });
};

const getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        const salarioDB = salarios.find(salario => salario.id === empleado.id);
        if(!salarioDB){
            reject(`No existe el salario para el empleado con el id ${empleado.nombre}`);
        }else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
};

getEmpleado(1).then(getSalario).then(console.log).catch(err => console.log(err));