var arreglo = [5,10,11,2,1,9,20];
var ordenado = arreglo.sort(function(a,b){
    return a-b;
});

let ordenadof = arreglo.sort((a,b) => a-b);

console.log(ordenado);
console.log(ordenadof);