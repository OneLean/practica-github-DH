const datosBici = require('./datosBici');

objetoLiteral = {
    bicicletas: datosBici,
    filtrarPorID:(id) => objetoLiteral.bicicletas.filter(bici => bici.id === id),
    venderBici:(id) => objetoLiteral.bicicletas.filter(bici => bici.id === id ? bici.vendida='si' : ''),
    biciParaLaVenta:() => objetoLiteral.bicicletas.filter(bici => bici.vendida === 'no'),
    totalDeVentas:() => objetoLiteral.bicicletas.reduce((total,bici) => bici.vendida==='si' ? total+bici.precio : null, 0),
}
// console.log(objetoLiteral.filtrarPorID(2))
// console.log(objetoLiteral.biciParaLaVenta())
console.log(objetoLiteral.venderBici(3))
console.log(objetoLiteral.bicicletas)

// Nota: no usar funciones flechas en los objetos
// Nota2: la funciones flecha tienen problemas con la palabra reservada this.