const Enum = require('nodester/enum');


const PARSE_ERROR      = 'Invalid JSON was received by the server.';
const INVALID_REQUEST  = 'The JSON sent is not a valid Request object.';
const METHOD_NOT_FOUND = 'The method does not exist / is not available.';
const INVALID_PARAMS   = 'Invalid method parameter(s).';
const INTERNAL_ERROR   = 'Internal JSON-RPC error.';

const WRONG_PROTOCOL   = 'Only JSON-RPC version 2.0 is supported.';


module.exports = new Enum({
	PARSE_ERROR,
	INVALID_REQUEST,
	METHOD_NOT_FOUND,
	INVALID_PARAMS,
	INTERNAL_ERROR,

	WRONG_PROTOCOL
});
