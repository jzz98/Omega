import {ConectionDb} from '../conection.js';

export class Sqlite{
    constructor(){
        this.conection = new ConectionDb()
    }

    async select(args, table){
        try{
            const db = await this.conection.sqlite_conection()

            // default values
            const columnas = Array.isArray(args) ? args.join(', ') : (args || '*');
            const tabla = typeof table === 'string' ? table : 'auth';

            // SQL query  
            const query = `SELECT ${columnas} FROM ${tabla}`;
            
            // return the promise
            return new Promise((resolve, reject) => {
                db.all(query, (err, rows) => {
                    if (err) return reject(err);
                    resolve(rows);
                });
            });
        }catch(err){
            return console.error(err)
        }
    }
}

