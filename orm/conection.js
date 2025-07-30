import { getMysqlCredentials } from './environment/readEnv.js';
import mysql from 'mysql2/promise';

export class ConectionDb{
    // return the db conection
    // remove this later
    async sqlite_conection(){
        const sqlite = await import('sqlite3')
        const db = new sqlite.default.Database('../database.db')
        return db;
    }

    async mysql_conection(){
        const credentials = await getMysqlCredentials()

        const conection = await mysql.createConnection({
            host: credentials.MYSQL_HOST,
            user: credentials.MYSQL_USER,
            password: credentials.MYSQL_PASSWORD,
            database: credentials.MYSQL_DB
        })

        return conection;
    }

}

