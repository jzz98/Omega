import express from 'express';
import { get } from './functions/decorators.js';
import { set_view_engine } from './properties/view_engine.js';

export class Omega {
    constructor() {
        this.server = express();
        
        // put the routes
        if (this.routes) {
            this.routes.forEach(({ method, path, handlerName }) => {
                // imitating the behavior of Express 
                // this[handlerName] is the callback
                this.server[method](path, this[handlerName].bind(this));
            });
        }

        // set view engine by default
        set_view_engine(this.server, "ejs")

    }


    listen(port) {
        this.server.listen(port, () => console.log(`Servidor en puerto ${port}`));
    }
}
