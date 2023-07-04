const importar = require('./collectibles.js');

let hotToys = importar('Hot Toys');
let bandai = importar('Bandai');
let starWars = importar('Star Wars');

let unifiedCollectibles = [...hotToys,...bandai,...starWars];

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures:() => collectibles.figuras.forEach(e => console.log(e)),
    figuresByBrand:(brand) => collectibles.figuras.filter(e => e.marca === brand ? e : ''),
}
collectibles.listFigures()
console.log(collectibles.figuresByBrand("Bandai"))