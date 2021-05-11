const argv = require('./confi/yargs').argv;
/*const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'programa el numero el cual desea multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;*/
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no renocido')
}

//const fs = require('fs');
//const { crearArchivo } = require('./multiplicar/multiplicar');
//let base = 1;
/*let data = '';
for (let I = 0; I < 11; I++) {
    data += `${base} * ${I} =, ${ base * I} \n`;
}

fs.writeFile(`Tablas/tablas-${ base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${ base }.txt ha sido creado`);
});*/

//let argv2 = process.argv;
//console.log(argv.base);
//console.log('limite', argv.limite);



//let parametro = argv[2];
//let base = parametro.split('=')[1];
/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo}`))
    .catch(e => console.log(e));*/