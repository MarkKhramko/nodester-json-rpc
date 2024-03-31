/**
 * nodester-json-rpc
 * MIT Licensed
 */

'use strict';

// Constants:
const ErrorCodes = require('../constants/ErrorCodes');
const ErrorMessages = require('../constants/ErrorMessages');


module.exports = {
	validateBody: _validateBody,
	validateProtocolVersion: _validateProtocolVersion
}

function _validateBody(body) {
	if (typeof body !== 'object') {
		const err = new Error(ErrorMessages.INVALID_REQUEST);
		err.code = ErrorCodes.INVALID_REQUEST;
		throw err;
	}

	return true;
}

function _validateProtocolVersion(protocolVersion=null) {
	if (!!protocolVersion && protocolVersion !== '2.0') {
		const err = new Error(ErrorMessages.WRONG_PROTOCOL);
		err.code = ErrorCodes.WRONG_PROTOCOL;
		throw err;
	}

	return true;
}
