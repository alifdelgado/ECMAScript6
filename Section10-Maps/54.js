let mapa = new Map();
mapa.set("nombre", "Fernando");
mapa.set("edad", 31);
mapa.set("apellido");

console.log(mapa);
console.log(mapa.size);
console.log(mapa.get("nombre"));
console.log(mapa.get("edad"));
console.log(mapa.has("nombre"));
console.log(mapa.has("apellido"));

mapa.delete("nombre");
console.log(mapa.get("nombre"));
console.log(mapa.has("nombre"));

mapa.clear();
console.log(mapa);