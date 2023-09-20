// Crear un programa que determine si un número introducido en un prompt es divisible por 11 y 5 o no, mostrar el resultado con console.log

function divisible(numero){
    if(numero % 5 === 0 && numero % 11 === 0){
        console.log(`Su numero es ${numero} y es divisible por 5 y 11 `)
    }else if (numero % 11 === 0 ){
        console.log(`Su numero es ${numero} y es divisible solo 11  `)
    }else if (numero % 5 === 0 ){
        console.log(`Su numero es ${numero} y es divisible solo 5  `)
    }else{
        console.log(`Su numero es ${numero} y no es divisble por ni 5 ni 11 `)
    }
}
let pedirNumero = prompt('Ingrese un numero y le diremos si es divisible o no')
let numero = parseInt( pedirNumero )

let resultado = divisible(numero)