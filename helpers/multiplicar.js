const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 1, listar = false, limite = 10 ) => {
    
    try {
        let salida = '',
            consola = '';

        for (let i =  1; i <= limite; i++) {
            salida += `${ base } x ${i} = ${ base  * i}\n`;
            consola += `${ base } ${ 'x'.red } ${i} ${'='.blue} ${ base  * i}\n`;
        } 
        
        if(listar){
            console.log('============='.green);
            console.log(` Tabla del ${ base }`.blue);
            console.log('============='.green);
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        return `tabla-${ base }`;

    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}