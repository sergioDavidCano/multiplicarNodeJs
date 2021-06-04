const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//demand es obligar al usuario intriducir la informacion
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'programa el numero el cual desea multiplicar', opt)
    .help()
    .argv;
module.exports = {
    argv
};