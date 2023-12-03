const pt =require("prompt-sync")({signit: true})

let a = pt ("cuantos comensales hay?: ")

function tortilla (comensales, cebollistas, noCebollistas){
    const patatas = 200
    const huevos = 5
    const cebolla = 300
    const vino = 0.5
    const KGpatatas = patatas * comensales
    const huevos2 =  (KGpatatas/1000)*huevos
    const vino2 = comensales * vino
    if (cebollistas>0){
    const cebolla2 = (KGpatatas/1000)*cebolla
    } else if (noCebollistas>0){
    cebolla = 0
    }

    
    
}






