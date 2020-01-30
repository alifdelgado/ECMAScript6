function agregar_alumno(){
    console.log(arguments);
    for(var i=1;i<arguments.length;i++){
        arguments[0].push(arguments[i]);
    }
    return arguments[0];
}

var alumnos_arr = ['Fernando'];
var alumnos_arr2 = agregar_alumno(alumnos_arr, "Maria", "Pedro", "Susana", "Juan", "Hernando");
console.log(alumnos_arr2);