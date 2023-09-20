// Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.
alert(`ingrese 2 numeros y le diremos cual es el mayor`)
alert(`Le llamaremos al primer numero ingresado A y al segundo B`)


function comprobarMayor( a, b ){
    if(a === b){
        alert(`El numero A ${a} y B ${b} son iguales`)
        return 
        // estoy es un early return 
    } 
    let comparacion = a > b ?  alert(`El numero A ${a} es mayor B ${b}`) : alert(`El numero B  ${b} es mayor A ${a}`)
    return 
    
};

function pedir(){
    let pedirNumero = prompt('Ingrese un numero ')
    let numero = parseInt( pedirNumero )
    return numero
};

let a = pedir();
let b = pedir();

let comprobacion = comprobarMayor(a,b);
// let comprobacion = mismoValor(a,b);



// function mismoValor( a, b ){
//     let comparacion = a === b ?  alert(`El numero A ${a} y B ${b} son iguales`) : comprobarMayor(a,b)
//     return comparacion

// }