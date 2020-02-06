let set = new WeakSet();
let persona1 = { nombre: "Juan Carlos"};
let persona2 = { nombre: "Maria Perez"};

set.add(persona1);
set.add(persona2);

set.delete(persona1);

console.log(set);
console.log(set.has(persona1));