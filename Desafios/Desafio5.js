const productos = ["Play 5", "Nintendo Switch", "Play 4", "Nintendo 3DS", "Play 3"]

console.log(productos)

for(let i = 0; i < productos.length ; i++) {
    console.log(`producto ${i + 1} : ${productos[i]}`)
}

console.log("El último producto ha sido vendido")

productos.pop()

for(let i = 0; i < productos.length ; i++) {
    console.log(`producto ${i + 1} : ${productos[i]}`)
}