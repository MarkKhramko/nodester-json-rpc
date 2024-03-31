const Enum = require('nodester/enum');


const PARSE_ERROR = -32700; // Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.
const INVALID_REQUEST = -32600; // The JSON sent is not a valid Request object.
const METHOD_NOT_FOUND = -32601; // The method does not exist / is not available.
const INVALID_PARAMS = -32602; // Invalid method parameter(s).
const INTERNAL_ERROR = -32603; // Internal JSON-RPC error.

const WRONG_PROTOCOL = -32000;

// -32000 to -32099 Reserved for implementation-defined server-errors.


module.exports = new Enum({
	PARSE_ERROR,
	INVALID_REQUEST,
	METHOD_NOT_FOUND,
	INVALID_PARAMS,
	INTERNAL_ERROR,

	WRONG_PROTOCOL
});
