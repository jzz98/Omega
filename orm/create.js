import sqlite3 from 'sqlite3'
import mysql2 from 'mysql2'
import { read, readFileSync } from 'fs'

class CreateDb {
  create() {
    try {
      // read database config
      const type = readFileSync('../.config.db.json', 'utf8');
      const object = JSON.parse(type)

      // create a sqlite database if it is defined in the config
      if (object.type == 'sqlite') {

        // create the db
        const db = new sqlite3.Database('../database.db', (err) => {
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
            console.log('Tabla "usuarios" creada.');
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
      

    } catch (err) {
      console.log(err);

    }

  }
}

const instance = new CreateDb();
instance.create()