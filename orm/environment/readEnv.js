export async function getMysqlCredentials(){
    try{
        const fs = await import('fs')
        let envFile = fs.readFileSync('../../.env', 'utf8')
        const envVars = {};

        envFile.split('\n').forEach(linea => {
            const lineaLimpia = linea.trim();
            if (lineaLimpia && !lineaLimpia.startsWith('#')) {
                const [clave, valor] = lineaLimpia.split('=');
                envVars[clave] = valor;
            } 
        });    
        return envVars
    }catch(err){
        console.error(err)
    }
}

