const pt =require("prompt-sync")({signit: true})

const año = pt ("Dime un año: ")

if (año % 400 === 0 || año % 4 === 0){
    console.log("Si bisiesto")
} else if (año % 100 != 0){
    console.log("No bisiesto")
}