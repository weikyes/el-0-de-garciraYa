const pt =require("prompt-sync")({signit: true})

let numero = pt ("dime un numero: ")


if (numero %2 == 0){
    return console.log("El numero es par")

} else if (numero %2 !==0){
return console.log("El numero es impar")
}
else if (numero = "salir"){
    console.log("saliendo...")

}