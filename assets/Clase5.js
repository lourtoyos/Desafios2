//Bucle while  

let intentos = 0; 

while (intentos < 6) {
    console.log("Hola")
    intentos ++ // intentos = intentos + 1, por eso el hola se repite 6 veces (va sumando uno cada vez)
}

//Bucle Do-While (hace que se ejecute al menos una vez y si da V se ejecuta más veces)

let saldoDisponible = 500;
let totalCompra = 600

do{
    if (totalCompra > saldoDisponible) {
        alert("Saldo insuficiente")
    } else{
        alert("Pago realizado con éxito")
    }
    totalCompra = prompt("Introduce un nuevo total: ")

} while(totalCompra > saldoDisponible) //necesita un while para funcionar 

    alert("Gracias por su compra")

//Bucle for (controlas cuantas veces se repite)

//for (let i (inicio); condición (true o false); actualización (i++))

//Array (conjunto de datos)

const Milista = []

const nombres = ["Lourdes", "Joel", "Atreus"] // pueden ser otros tipos de datos, como números 

//Métodos de Array 

// .lenght (para mostrar la cantidad de datos ) 
// Ej: console.log (nombres.lenght)

// .push para agregar un dato al final del array 

// nombres.push ("Ellie")

// .shift para eliminar el primer dato del array, no hace falta poner un parámetro 

// .pop para eliminar el último dato del array 

// .unshift para agregar un dato al principio 

// .indexOf para saber en qué índice está un dato 
// console.log(nombres.IndexOf ("Atreus"))

// .splice eliminar/agregar 
// nombres.splice(1,2, "Sindri") (1 es a partir de que indice,2 cuantos elimino y el tercero dato es para agregar )

for (let i = 0; i < nombres.length; i++) {
    
}
console.log(`Hola ${nombres[i]}`)

console.log(nombres.length);

