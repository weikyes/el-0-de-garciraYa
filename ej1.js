const pt = require("prompt-sync") ({sigint: true})

let nombre = pt("¿Cual es tu nombre?")

let edad = pt("¿Cual es tu edad?")
   if (edad>=18) {
    console.log("Si puedes conducir")
   } else {
    console.log("No puedes conducir")
   }



 


