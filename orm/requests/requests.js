import { ConectionDb } from '../conection.js';

export class Sqlite {
    constructor() {
        this.conection = new ConectionDb()
    }

    async select(args, table) {
        try {
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
        } catch (err) {
            return console.error(err)
        }
    }

    async insert(data, table) {
        const db = await this.conection.sqlite_conection()

        // Extraer claves y valores
        const keys = Object.keys(data)
        const values = Object.values(data)

        const placeholders = keys.map(() => '?').join(', ')
        const columns = keys.join(', ')
        const query = `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`
        
        return new Promise((resolve, reject) => {
            db.run(query, values, function (err) {
                if (err) return reject(err)
                resolve({ lastID: this.lastID, changes: this.changes })
            })
        })
    }

    async select_where_equal(args, table, first, second) {
        try {
            const db = await this.conection.sqlite_conection()

            // default values
            const columns = Array.isArray(args) ? args.join(', ') : (args || '*');
            const tables = typeof table === 'string' ? table : 'auth';

            // SQL query  
            const query = `SELECT ${columns} FROM ${tables} WHERE ${first}=?`;

            // return the promise
            return new Promise((resolve, reject) => {
                db.all(query, [second], (err, rows) => {
                    if (err) return reject(err);
                    resolve(rows);
                });
            });
        } catch (err) {
            return console.error(err)
        }
    }


}

// inherits the connection to the DB
export class MySql extends Sqlite {
    async select(args, table) {
        try {
            const db = await this.conection.mysql_conection()
            const columnas = Array.isArray(args) ? args.join(', ') : (args || '*');
            const tabla = typeof table === 'string' ? table : 'auth';

            // SQL query  
            const query = `SELECT ${columnas} FROM ${tabla}`;

            const [rows] = await db.execute(query);
            await db.end();

            return rows
        } catch (err) {
            return console.error(err)
        }
    }

    async insert(data, table) {
        try {
            const db = await this.conection.mysql_conection();

            const keys = Object.keys(data);
            const values = Object.values(data);

            const columns = keys.join(', ');
            const placeholders = keys.map(() => '?').join(', '); // genera ?, ?, ? según la cantidad de columnas

            const query = `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`;

            const [rows] = await db.execute(query, values);
            await db.end();

            return rows;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async select_where_equal(args, table, first, second) {
        try {
            const db = await this.conection.mysql_conection()

            // default values
            const columns = Array.isArray(args) ? args.join(', ') : (args || '*');
            const tables = typeof table === 'string' ? table : 'auth';

            // SQL query  
            const query = `SELECT ${columns} FROM ${tables} WHERE ${first} = ?`;

            const [rows] = await db.execute(query, [second])
            await db.end();

            return rows
        } catch (err) {
            return console.error(err)
        }
    }

}

