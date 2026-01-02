API Reference
=============

This file gives a brief overview of the main modules in the project and their responsibilities.

ORM
---
- `orm/conection.js` — contains the `ConectionDb` class to create and manage DB or data-source connections.
- `orm/create.js` — simple script used to initialize or create ORM state/resources. The file is runnable (`node orm/create`).
- `orm/environment/readEnv.js` — loads environment configuration (env vars, .env fallbacks).
- `orm/requests/requests.js` — helper functions to perform ORM queries/requests; intended to be used by higher-level code or examples.
- `orm/validations/OrmState.js` — exports `isOrmEnable(callback)`, a helper to check whether the ORM is enabled before running create operations.

Configuration
-------------
The project configuration file `config.db.json` (project root) controls ORM behavior. Key fields:

- `open` (boolean) — enable (`true`) or disable (`false`) ORM features. When `false`, `isOrmEnable` will prevent DB creation.
- `type` (string) — database backend to use (`sqlite`, `mysql`, etc.).

Example:

```json
{
	"open": true,
	"type": "sqlite"
}
```

Note: this project uses ES modules. Import modules with `import` and include the `.js` extension for local paths in Node.js.

Example:

```js
import { isOrmEnable } from './orm/validations/OrmState.js';
import { query } from './orm/requests/requests.js';
import { ConectionDb } from './orm/conection.js';
```

Server
------
- `server/sintax.js` — exports the `Omega` class that wraps an Express server and registers decorated routes.
- `server/functions/decorators.js` — small decorator helpers for request/response handling.
- `server/functions/templates.js` — template helper functions used to render views or snippets.
- `server/properties/view_engine.js` — small view engine or adapter utilities.

Examples
--------
- `examples/orm.js` — shows how to combine `orm/` helpers to run a small workflow.
- `examples/server.js` — small server startup demonstration using `server/` utilities.

Notes
-----
Files are intentionally simple; inspect their implementations for exact exported functions and parameters. If you need a more detailed typed API, I can generate a more exhaustive reference by reading each file and extracting function signatures.
