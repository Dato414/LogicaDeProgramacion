// Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.

const dato = prompt('ingrese un dato')

let tipo = dato.charAt(0) 
if(parseInt(tipo)){
    alert(`${dato} su primer caracter es un numero ${tipo}`)
}else{
    alert(`${dato} su primer caracter es una letra ${tipo}`)
}

// const dato = prompt('ingrese un dato')

// const firstCharacter = dato.charAt(0) 
// const characterInt = parseInt(firstCharacter)
// const isNumber = isNaN(characterInt) ? false : true

// if(isNumber){
//     alert(`${dato} su primer caracter es un numero ${firstCharacter}`)
// }else{
//     alert(`${dato} su primer caracter es una letra ${firstCharacter}`)
// }