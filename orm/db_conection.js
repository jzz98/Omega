export class ConectionDb{
    async sqlite_conection(){
        const sqlite = await import('sqlite3')
        const db = new sqlite.default.Database('../database.db')
        return db;
    }
}

