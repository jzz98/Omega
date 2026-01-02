Usage
=====

This document shows how to run the provided examples and use the main pieces of the project.

Running examples
----------------
From the project root run:

```bash
npm install
node orm/create
node examples/server.js
```

- `node orm/create` runs the ORM creation/initialization script located at `orm/create.js`.
- `node examples/server.js` starts the minimal example server located at `examples/server.js`.

Using the ORM helpers
---------------------
The `orm/` folder contains utilities for connecting and running simple ORM operations. This project uses ES modules (`type: module` in `package.json`). Typical usage pattern with ESM:

```js
import './orm/create.js';
// or import specific helpers from orm/conection.js or orm/requests/requests.js
import { ConectionDb } from './orm/conection.js';
import { isOrmEnable } from './orm/validations/OrmState.js';
```

Using the server utilities
-------------------------
The `server/` folder contains helper code for server-side templates and decorators. Example using ESM:

```js
import { Omega } from './server/sintax.js';
// server functions and templates under server/functions/

const app = new Omega();
app.listen(3000);
```

Examples
--------
- `examples/orm.js` — demonstrates basic ORM usage and helper functions.
- `examples/server.js` — small, runnable server demo using utilities from `server/`.

Notes
-----
- This project is intentionally small; consult [docs/API.md](API.md) for function-level descriptions.

Configuration
-------------
The project reads `config.db.json` from the project root to control ORM behavior.

- `open` (boolean): when `false` the ORM is disabled — `orm/validations/OrmState.js` reads this and will block DB creation. Set to `true` to allow `orm/create.js` to run.
- `type` (string): selects the DB backend. Supported values include `sqlite` and `mysql`.

Example `config.db.json` to enable SQLite:

```json
{
	"open": true,
	"type": "sqlite"
}
```
