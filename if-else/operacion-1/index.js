//Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

//Los números pares son aquellos que tienen como múltiplo al número dos, es decir, que se pueden dividir en una mitad exacta.


function comprobarSiEsPar(numero) {
    if(numero % 2 === 0){
        console.log(`su ${numero} es par`)
    }
    if(numero % 2 !== 0){
        console.log(`su ${numero} es impar`)
    }
}

let pedirNumero = prompt('ingrese un numero y le diremos si es par o no')
let numero = parseInt(pedirNumero)

let comprobacion = comprobarSiEsPar(numero)




















