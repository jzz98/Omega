import {ConectionDb} from '../db_conection.js';

export class Sqlite{
    constructor(){
        this.conection = new ConectionDb()

    }
    async select(){
        const db = await this.conection.sqlite_conection()

        db.all('SELECT * FROM auth', (err, rows) => {
            if (err) return console.error(err.message);
                console.log(rows);
        });        
    }
}

