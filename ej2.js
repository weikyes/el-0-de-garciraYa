const pt = require("prompt-sync") ({sigint: true})


let nota = pt ("¿Cual es tu nota? ")

if (nota <=3)
    console.log("Muy insuficiente")
else if (nota >3 && nota <5)
    console.log("Insuficiente")
else if (nota >=5 && nota <6)
    console.log("Suficiente")
else if (nota >=6 && nota <7)
    console.log ("Bien")
else if (nota >=7 && nota < 8)
    console.log("Notable")
else if (nota >=9 && nota <=10)
    console.log("Sobresaliente")

