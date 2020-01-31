var manejador = {
    id:"123",
    init: function(){
        document.addEventListener("click", event => this.clickEnPagina(event.type));
        // document.addEventListener("click", (function(event) {
        //     this.clickEnPagina(event.type);
        // }).bind(this), false);
    },
    clickEnPagina: function(type){
        console.log("Manejando " + type + " para el id: " + this.id);
    }
};

manejador.init();