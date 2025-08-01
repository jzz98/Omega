import { Omega } from '../server/sintax.js';
import { get, post } from '../server/functions/decorators.js';
import { Sqlite } from '../orm/requests/requests.js';

class Myapp extends Omega{
    // route
    @get('/')
    //method
    async mymethod(req, res){
        // instance the object
        const db = new Sqlite()

        const rows = await db.select('*', "auth") // auth is the default table on db 
        return res.json(rows)
    }

    @get('/insert')
    //method
    async mymethod(req, res){
        // instance the object
        const db = new Sqlite()

        const data = {
            name: "username",
            email: "email@example.com",
            password: "123456",
            superuser: "N"
        }

        const rows = await db.insert(data, "auth") // auth is the default table on db 
        return res.json(rows)
    }

    @get('/select_where_equal')

    //method
    async mymethod(req, res){
        // instance the object
        const db = new Sqlite()

        // select where name is equal example
        const data = await db.select_where_equal('*', "auth", 'name', 'example') // auth is the default table on db 
        return res.json(data)
    }

    /*
    IT'S THE SAME STRUCTURE FOR MYSQL REQUEST, ONLY U NEED TO IMPORT THE OBJECT: import {Mysql} from 'omega-js';
    */
}

// execute server
const PORT = 8080
new Myapp().listen(PORT)

