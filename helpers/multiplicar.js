
const fs = require('fs') ;
const colors = require('colors');

const crearArchivo = async( base = 5, l, c) => {
        try
        {
        console.clear();
        let salida, consola = '';
    
        for (let i = 1; i<=c; i++)
        {
            salida += `${base} x ${ i } = ${base*i}\n`;
            consola += `${colors.green(base)} ${colors.red('x')} ${colors.blue(i)} ${colors.yellow('=')} ${colors.magenta(base*i)}\n`;
        }
        if(l){
            console.log("================================================".green);
            console.log(`     Tabla del: ${ colors.bgRed(base) }`.yellow);
            console.log("================================================".green);    
            console.log(consola);
        }
            
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
    
        return `tabla-${base}.txt`;
    }
    catch(err){
        throw err;
    }
    } 

//CON Promise

/*        const crearArchivo = ( base = 5) => {

                 return new Promise((resolve, reject) =>{
                    console.clear();
                    console.log("================================================");
                    console.log(`     Tabla del: ${ base }`);
                    console.log("================================================");
                    let salida = '';
                
                    for (let i = 1; i<=10; i++)
                    {
                        salida += `${base} x ${ i } = ${base*i}\n`;
                    }
                    console.log(salida);
                
                    fs.writeFileSync( `tabla-${ base }.txt`, salida);
                
                    resolve(`tabla-${base}.txt`);
                
                })
}*/

module.exports = {
    crearArchivo
}