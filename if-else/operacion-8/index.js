// Determinar si una palabra empieza con mayúscula o no.

const nombre = prompt('ingrese su nombre')
const primerLetra = nombre.charAt(0)
// const comprobacion = (primerLetra.toLowerCase) ? alert(`${nombre} su primer letra ${primerLetra} es minuscula`) : alert(`${nombre} su primer letra ${primerLetra} es mayuscula`)
if(primerLetra === primerLetra.toLowerCase()) {
     alert(`${nombre} su primer letra ${primerLetra} es minuscula`)
} else {
    alert(`${nombre} su primer letra ${primerLetra} es mayuscula`)
}