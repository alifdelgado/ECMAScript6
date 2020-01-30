// function saludo(mensaje = "Hola Mundo", tiempo = 3000){
//     setTimeout(function(){
//         console.log(mensaje);
//     }, tiempo);
// }

// saludo();

function saludar(fn = function(){ console.log("Hola mundo"); }){
    if(typeof fn === "undefined"){
        console.log('no es una función');
        return;
    }
    fn();
}

saludar();