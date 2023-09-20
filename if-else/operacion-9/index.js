// Determinar si un año dado es bisiesto.

//cualquier multiplo de 4 es bisiesto
const year = prompt('Ingrese un año')


function EsBisiesto(year){
    if(year % 4 === 0){
        return console.log('es bisiesto')
    } else {
        return console.log('no es bisiesto')
    }
}

const comprobacion = EsBisiesto(year)
