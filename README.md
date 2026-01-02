##Backend micro-framework for node js based on express still in development
# Omega

Lightweight Node.js mini-framework for simple ORM and server utilities.

Overview
--------
Omega provides a small set of utilities for building simple servers and lightweight ORM interactions. The repository contains an `orm` helper set, a `server` utilities collection, and example scripts in the `examples/` folder to demonstrate usage.

Quick start
-----------
1. Install dependencies (if any) from `package.json`:

```bash
npm install
```

2. Run the ORM create simple Db example:

```bash
node orm/create
```

3. Run the example server:

```bash
node examples/server.js
```

ES modules
----------
This project uses ES modules. `package.json` contains `"type": "module"`, so use `import` syntax when requiring local files. Include the `.js` extension for local imports in Node.js ESM.

Example:

```js
import './orm/create.js';
import { startServer } from './examples/server.js';
```

Project layout
--------------
- `index.js` — project entry (if present)
- `orm/` — ORM-related helpers
    - `conection.js` — connection helper
    - `create.js` — script for creating or initializing ORM resources
    - `environment/readEnv.js` — environment helpers
    - `requests/requests.js` — ORM requests utilities
    - `validations/ormState.js` — ORM state validation
- `server/` — server utilities and templates
    - `sintax.js` — server syntax helper
    - `functions/decorators.js` — server decorator helpers
    - `functions/templates.js` — template helpers
    - `properties/view_engine.js` — view engine helper
- `examples/` — example usage scripts: `orm.js`, `server.js`

Documentation
-------------
More detailed usage and API documentation is available in the `docs/` folder:

- [docs/USAGE.md](docs/USAGE.md)
- [docs/API.md](docs/API.md)
- [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)

Contributing
------------
See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for contributor guidelines and development tips.

License
-------
See the `LICENCE` file in the project root.
