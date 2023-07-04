const fs = require('fs');

let datosBici = JSON.parse(fs.readFileSync('bicicletas.json'))

module.exports = datosBici;