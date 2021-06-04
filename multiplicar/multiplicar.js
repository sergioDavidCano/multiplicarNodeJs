const fs = require('fs');
let listarTabla = (base, limite = 10) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} =, ${ base * i} `);
    }
};
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base, limite)) {
            reject(`El valor introducido ${ base} no se reconoce como un numero`.red);
            return;
        }
        let data = '';
        for (let I = 0; I <= limite; I++) {
            data += `${base} * ${I} =, ${ base * I} \n`;
        }
        //1-Se pone primero adonde quiero guardar el archivo,2- se pone el nombre archivo despues del doble pleca
        //- el archivo que vamos a crear 4- el error por si algun error
        fs.writeFile(`Tablas/tablas-${ base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(` tabla-${ base }-al-${ limite}.txt`);
        });
    });
};
//module.exports ={} esta funcion nos permite utilizar funciones globalmente en los archivos 
module.exports = {
    crearArchivo,
    listarTabla
};