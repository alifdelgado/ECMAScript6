let numeros = [1,2,3,4,5,6,7];
let setNumeros = new Set(numeros);
console.log(setNumeros);
let arrayNumeros = [...setNumeros];
console.log(arrayNumeros);

function eliminaDuplicados(items){
    return [... new Set(items)];
}

let duplicados = [1,2,3,4,5,6,7,7,7,7,7,3,1,2,3,4,5];
let sinDuplicados = eliminaDuplicados(duplicados);
console.log(sinDuplicados);