export async function getMysqlCredentials(){
    try{
        const env = path.resolve(process.cwd(), '.env');
        
        const fs = await import('fs')
        let envFile = fs.readFileSync(env, 'utf8')

        const envVars = {};
        
        // to object
        envFile.split('\n').forEach(linea => {
            const lineaLimpia = linea.trim();
            if (lineaLimpia && !lineaLimpia.startsWith('#')) {
                const [clave, valor] = lineaLimpia.split('=');
                envVars[clave] = valor;
            } 
        });    
        return envVars
    }catch(err){
        if(err.code === 'ENOENT'){
            return console.log("Archivo .env inexistente")
        }else{
            return console.error(err)

        }
    }
}

