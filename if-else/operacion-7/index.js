// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.

// la suma de os angulos internos deber sumar 3 angulos que juntos den 180 grados

function angulosSuma(a, b ,c){
    return a + b + c
}
function pedir(){
    let pedirNumero = prompt('Ingrese un numero ')
    let numero = parseInt( pedirNumero )
    return numero
};

const a = pedir()
const b = pedir()
const c = pedir()

const resultado = angulosSuma(a, b, c)

const comprobacion = (resultado <= 180) ? alert("es valido") : alert('no es valido')