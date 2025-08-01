import { readFileSync } from 'fs'
import { ConectionDb } from './conection.js';
import path from 'path';

class CreateDb {
  constructor() {
    this.connection = new ConectionDb()

    this.config_path = path.resolve(process.cwd(), '.config.db.json');
    this.sqlite_db = path.resolve(process.cwd(), 'database.db');
  }

  async create() {
    try {
      // read database config
      const type = readFileSync(this.config_path, 'utf8');
      const object = JSON.parse(type)

      // create a sqlite database if it is defined in the config
      if (object.type == 'sqlite') {
        let sqlite3 = await import('sqlite3')
        // create the db
        const db = new sqlite3.default.Database(this.sqlite_db, (err) => {
          if (err) {
            return console.error(err.message);
          }
        });

        // create a default table
        db.serialize(() => {
          db.run(`CREATE TABLE IF NOT EXISTS auth (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT UNIQUE,
          password TEXT,
          superuser TEXT
        )`, (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('**Table auth create');
          });
        });

        // close the conection
        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log('Conexión cerrada.');
        });

      }

      if (object.type == 'mysql') {
        console.log("ejecutando")
        const conn = await this.connection.mysql_conection()

        // create db
        const result = await conn.query(`
          CREATE TABLE IF NOT EXISTS auth (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255),
            email VARCHAR(255) UNIQUE,
            password TEXT,
            superuser CHAR(1)
          );
        `);
        
        console.log("**Table auth crate")
        await conn.end(); 
        return result
      }
    } catch (err) {
      return console.log(err);

    }

  }
}
