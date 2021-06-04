//Se utiliza con un puto al final para tener la funcion o comando que quiero utilizar
const argv = require('./confi/yargs').argv;
//importar colores a la consola
const colores = require('colors');
//require llamo la funcion que deseo utilizar en el este codigo
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//aqui busco la posicion del comando  indicando el argumento que recibamos de console
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no renocido')
}
//subir al repositorio de git