const pt =require("prompt-sync")({signit: true})

const palabra = pt ("Dime una palabra: ")

const frase = palabra.toLowerCase()

let vocales = 0 

   for (let x = 0; x < frase.length; x++){
    if (frase.charAt(x) === "a" || 
        frase.charAt(x) === "e" ||
        frase.charAt(x) === "i" ||
        frase.charAt(x) === "o" ||
        frase.charAt(x) === "u") {
            vocales = vocales +1 
        } 
           }
    console.log("La suma es esta: " + vocales)