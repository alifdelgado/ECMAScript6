let Persona = class{
    constructor(){
        this.nombre = "";
        this.edad = 30;
        this.direccion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste tenetur deserunt rem eos maiores ea, animi ut consectetur sit similique sunt tempora necessitatibus magnam, obcaecati quibusdam vero enim at.";
    }

    decirNombre(){
        console.log("Hola Mundo");
    }
};

let fernando = new Persona();
console.log(typeof fernando);
console.log(fernando instanceof Persona);