/**
 * nodester-json-rpc
 * MIT Licensed
 */

'use strict';


module.exports = {
	respondOk: _respondOk,
	respondWithError: _respondWithError,
}

function _respondOk(res, result, id) {
	const resultJSON = {
		jsonrpc: '2.0',
		result,
		id
	}
	res.status(200);
	return res.json(resultJSON);
}

function _respondWithError(res, error, id) {
	const resultJSON = {
		jsonrpc: '2.0',
		error: {
			code: error.code,
			message: error.message
		},
		id
	}
	res.status(200);
	return res.json(resultJSON);
}
