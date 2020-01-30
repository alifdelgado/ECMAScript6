function saludarRest(saludo, ...nombres){
    for(let i in nombres){
        console.log(`${saludo} ${nombres[i]}`);
    }
}

function saludarSpread(saludo, ...nombres){
    console.log(`${saludo} ${nombres}`);
}

let personas = ["melissa", "hernando", "juan"];
saludarRest("Hola", "fernando", "maria", "susana");
saludarSpread("Que tal!", personas);