/**
 * nodester-json-rpc
 * MIT Licensed
 */

'use strict';

// Constants:
const ErrorCodes = require('../constants/ErrorCodes');
const ErrorMessages = require('../constants/ErrorMessages');


module.exports = {
	validateMethod: _validateMethod
}

function _validateMethod(method=null, provider=null) {
	if (!provider[method]) {
		const err = new Error(`The method '${ method }' does not exist / is not available.`);
		err.code = ErrorCodes.METHOD_NOT_FOUND;
		throw err;
	}

	return true;
}
