// Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log

function divisibleEntre5( numero ) {
    if(numero % 5 === 0){
        // let division = numero % 5
        console.log(`si es divisible ${numero} `)
    } else {
        // let division = numero % 5
        console.log(`no es divisible ${numero} `)
        
    }
}
let pedirNumero = prompt('Ingrese un numero y le diremos si es divisible por 5')
let numero = parseInt( pedirNumero )
let resultado = divisibleEntre5(numero)