let h1 = document.createElement("h1")

h1.innerText = "God Of War Ragnarok"

let nuevoTexto = document.createElement("p")
nuevoTexto.innerText = "Nuevo parrafo"
console.log(nuevoTexto)
console.log(nuevoTexto.isConnected) // isConected es para preguntar si la etiqueta está en el DOM (no en la consola, en la página) 

document.body.appendChild(h1)