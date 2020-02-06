let numeros = [100,20,30,50,200];
for(let i=0;i<numeros.length;i++){
    console.log(numeros[i]);
}

for(let i in numeros){
    console.log(numeros[i]);
}

for(let i of numeros){
    console.log(i);
}

let personas = new Set();
personas.add({nombre:"Fernando", edad:30});
personas.add({nombre:"Maria", edad:10});
personas.add({nombre:"Susana", edad:18});
personas.add({nombre:"Victor", edad:25});
personas.add({nombre:"Juan", edad:40});

for(let persona of personas){
    console.log(persona.nombre);
}

let personas1 = new Map([["nombre", "Fernando"], ["apellido", "Herrera"]]);

for(let persona of personas1){
    console.log(persona);
}