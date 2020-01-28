var saludo = "Hola Mundo";

console.log(saludo.substr(0,1) === "h");
console.log(saludo.startsWith("Hola"));
console.log(saludo.endsWith("Mundo"));
console.log(saludo.indexOf("x"));
console.log(saludo.includes("x"));
console.log(saludo.startsWith("Mu", 5));
console.log(saludo.includes("a", 5));