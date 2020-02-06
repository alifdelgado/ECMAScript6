function tareaAsincrona(){
    let promesa = new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Proceso asincrono terminado");
            resolve();
        }, 1300);
    });

    return promesa;
}

tareaAsincrona().then(function(){
    console.log("TODO OK");
},function(){
    console.error("TODO MAL");
});

console.log("Codigo secuencial");

// function resolve(){
//     console.log("Todo OK!");
// }

// function reject(){
//     console.log("Todo MAL");
// }