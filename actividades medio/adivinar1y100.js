const pt =require("prompt-sync")({signit: true})
const aleatorio = Math.round(Math.random()*100)
do { let numero =pt ("Dime un numero: ")
console.log (numero)
      if (numero == aleatorio){
        true
        console.log("correcto")
        break
    } else {
        false
    }
if (numero>aleatorio){
    console.log("Es menor")
}else if (numero<aleatorio){
    console.log("Es mayor")
}
}while (true)