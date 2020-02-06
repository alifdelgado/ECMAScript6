const getUsuarioById = (id, callback) => {
    const usuario = {
        nombre: "Fernando",
        id
    };

    if(id===20){
        callback(`El usuario con el id ${id} no existe`);
    } else {
        callback(null, usuario);
    }
};

getUsuarioById(20, (err, user) => {
    if(err){
        console.log(err);
        return;
    }else {
        console.log("Usuario de base de datos", user);
    }
});