# nodester JSON-RPC

[![NPM version](https://img.shields.io/npm/v/nodester-json-rpc)](https://www.npmjs.com/package/nodester-json-rpc)
[![License](https://img.shields.io/npm/l/nodester-json-rpc)](https://www.npmjs.com/package/nodester-json-rpc)

> JSON-RPC middleware for nodester.

* Follows [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)


## Installation

Install with NPM

```shell
npm install -S nodester-json-rpc
```

## Usage

`nodester-json-rpc` can only be used with a [nodester](https://www.npmjs.com/package/nodester) router:

```js
const Router = require('nodester/router');
const rpc = require('nodester-json-rpc/rpc');

const Path = require('path');


// For example: ../src/app/providers/Users.provider.js
const providersPath = Path.join(process.cwd(), 'src', 'app', 'providers');
const router = new Router({ providersPath });

// Define a route.
router.add.route(
  v1('post /rpc/users'),
  rpc({ providedBy: 'Users' })
);
```


Then make a `POST` request with a `body` formatted like this:

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "blockById",
    "params": {
      "id": 24232
    }
}
```


## License
[MIT](LICENSE)

## Copyright
Copyright 2024-present [Mark Khramko](https://github.com/MarkKhramko)
