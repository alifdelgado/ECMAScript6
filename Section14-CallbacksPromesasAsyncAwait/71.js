const empleados = [{id:1, nombre: 'Fernando'},{id:2, nombre: 'Melissa'},{id:3, nombre: 'Juan'}];
const salarios  = [{id:1, salario:1000},{id:2, salario:2000}];

const getEmpleado = (id, callback) => {
    const empleadoDB = empleados.find(empleado => empleado.id === id);
    if(!empleadoDB){
        callback(`No existe el empleado con el id ${id}`);
    }else {
        callback(null, empleadoDB);
    }
};

const getSalario = (empleado, callback) => {
    const salarioDB = salarios.find(salario => salario.id === empleado.id);
    if(!salarioDB){
        callback(`No existe el salario para el empleado con el id ${empleado.nombre}`);
    }else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
};

getEmpleado(1, (err, empleado) => {
    if(err){
        return console.log(err);
    }
    getSalario(empleado, (err, resp) => {
        if(err){
            return console.log(err);
        }
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    });
    console.log('empleado', empleado);
});