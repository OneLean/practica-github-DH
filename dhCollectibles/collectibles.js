const fs = require('fs');

const importar = (marca) => {
    let ruta
    switch (marca){
        case "Hot Toys":
            ruta="./datos/figuras1.json"
            break
        case "Bandai":
            ruta="./datos/figuras2.json"
            break
        case "Star Wars":
            ruta="./datos/figuras3.json"
            break
    }
    return JSON.parse(fs.readFileSync(ruta,'utf-8'))
}

module.exports = importar