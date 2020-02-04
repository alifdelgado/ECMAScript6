let persona = {
    saludar(){
        return "Hola";
    }
};

let amigo = {
    saludar(){
        // return Object.getPrototypeOf(this).saludar.call(this) + ", saludos!!!";
        return super.saludar() + ", saludos!!!";
    }
};

Object.setPrototypeOf(amigo, persona);

console.log(amigo.saludar());