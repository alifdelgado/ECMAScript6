var num1 = 10,
    num2 = 30;
var max = Math.max(num1, num2);
console.log(max);

let numeros = [1,5,10,20,100,234];
// let max = Math.max.apply(Math, numeros);
let max2 = Math.max(...numeros);
console.log(max2);