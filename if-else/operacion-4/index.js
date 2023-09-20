// Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.
console.log(`ingrese 2 numeros y le diremos cual es el mayor`)
console.log(`Le llamaremos al primer numero ingresado A y al segundo B`)



function comprobarMayor( a, b ){
    if(a > b){
        console.log(`El primer numero ingresado ${a} es mayor a ${b}`)
    } else if(a === b){
        console.log(`Numero A ${a} y numero B ${a} son iguales`)

    }else {
        console.log(`El segundo numero ingresado ${b} es mayor a ${a}`)
    }

}

function pedir(){
    let pedirNumero = prompt('Ingrese un numero ')
    let numero = parseInt( pedirNumero )
    return numero
}
let a = pedir()
let b = pedir()

let comprobacion = comprobarMayor(a, b)
