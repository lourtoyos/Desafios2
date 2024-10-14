function sumar(nro1,nro2) {
    let suma = nro1 + nro2
}

sumar(4,9)

//función flecha 

let multiplicar = (nro1,nro2) => {
    let multiplicar = nro1 * nro2
    console.log(`${nro1} * ${nro2} = ${multiplicar}`)
}

multiplicar(7,67) 

//return 

function sumar(nro1,nro2) {
    return nro1 + nro2
}
let usernro1 = prompt("Pone el primer número que querés sumar: ")
let usernro2 = prompt("Pone el segundo número que querés sumar: ")
let total = sumar(parseInt(usernro1),parseInt(usernro2))

console.log(`${usernro1} + ${usernro2} = ${total}`)

//scope de variables (el alcance que tiene una variable)

