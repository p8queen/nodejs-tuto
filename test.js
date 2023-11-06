
const ar = []
for(a=0;a<11;a++){
    ar.push(a)
}

const pares = ar.filter(e => e%2===0)
const paresAlCuadrado = ar.filter(e => e%2===0).map(e => Math.pow(e,2))
const noPares = ar.filter(e => pares.indexOf(e) == -1)

// console.log(ar)
// console.log(pares)
// console.log(noPares)

function toCut(ar=[], n=0){
    const a = []
    for(let i=0;i<ar.length;i += n){
        a.push(ar.slice(i,i+n))
    }
    
    return a
}

const myar = [1,2,3,4,5]
// console.log(toCut(myar,3))

let menuDia = {
    impares: [1,3,5,7,9],
    pares: [2,4,6,8,10],
    grandes: [1,2,3,4,5,].map(e => e+100)
}

function ingredienteEnMalEstado(menu, comida, ingrediente){
    const a = menu[comida]
    const i = a.indexOf(ingrediente)
    if(i<0){
        return "El menú está perfecto"
    }
    if(i===0){
        return a.slice(0,2)
    }
    if(i===a.length - 1){
        return a.slice(-2)
    }

    return a.slice(i-1,i+2)
}

// ingredienteEnMalEstado(menuDia,impares,7), remover 5 7 9
const r  = ingredienteEnMalEstado(menuDia,"pares",5)
// console.log(r)

function fakeBinary(n=1){
    let r = "1"
    flag = true
    while(n>1){
        if(flag){
            r += "0"
            flag = false
        }else{
            r += "1"
            flag = true
        }
        n -= 1
    }
    return r
}

console.log(fakeBinary(10))