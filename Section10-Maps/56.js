let mapa = new Map([["nombre", "Fernando"], ["edad", 31]]);
mapa.forEach(function(valor, llave, mapaOrigen){
    console.log(`Llave: ${llave}, Valor: ${valor}`);
    console.log(mapaOrigen);
});