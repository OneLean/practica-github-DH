let numeros = [32, 42, 12, 49, 30, 57, 53, 34, 14, 87]

let [a, , b, , c] = numeros

console.log(a)
console.log(b)
console.log(c)

const numerosFiltrados = numeros.filter((e) => e == a || e == b || e == c ? null : e)
console.log(numerosFiltrados)

let mascota = {
    nombre: 'Bony',
    tipoMascota: 'Perro',
    color: "Dorado",
    raza: "Golden Retriever"
}

let { nombre, tipoMascota, color, raza } = mascota
console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoMascota}, de color ${color} y su raza es: ${raza}`)