const prompt = require("prompt-sync") ({sigint: true})

let suma = 0;

while (true) {
    let input = prompt("Introduce un numero o cancelar para salir:")
if(input === "cancelar"){
    break
}
let numero

if (numero === Number(input)){
    alert("No entiendo")
}


console.log("La suma total es " + suma)