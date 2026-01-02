import { getMysqlCredentials } from './environment/readEnv.js';
import mysql from 'mysql2/promise';
import path from 'path';

export class ConectionDb{
    constructor() {
        this.sqlite_db = path.resolve(process.cwd(), 'database.db');
    }

    // return the db conection
    async sqlite_conection(){
        const sqlite = await import('sqlite3')
        const db = new sqlite.default.Database(this.sqlite_db)
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

