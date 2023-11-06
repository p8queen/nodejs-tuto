const ar = []
for(a=0;a<11;a++){
    ar.push(a)
}

const pares = ar.filter(e => e%2===0)
const paresAlCuadrado = ar.filter(e => e%2===0).map(e => Math.pow(e,2))
const noPares = ar.filter(e => pares.indexOf(e) == -1)

let numeros = [3,6,9,12,15]
const suma = numeros.reduce((acumulador,numero) => {
    return acumulador + numero
}, 0);

console.log(suma)

numeros = [1,2,3,4]
const productoria  = numeros.reduce((acumulador,numero) => {
    return acumulador * numero
}, 1);

console.log(productoria)

const numOrdenar = [3,5,8,2,1]
console.log(numOrdenar)
numOrdenar.sort((a,b) => b-a)
numOrdenar.splice(1,1) //remove index 1, 1 element
console.log(numOrdenar)