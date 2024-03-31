/**
 * nodester-json-rpc
 * MIT Licensed
 */

'use strict';

const {
	respondWithError,
} = require('../responses');

// Validators:
//	Arguments validator.
const { ensure } = require('nodester/validators/arguments');
//	Specs:
const {
	validateBody,
	validateProtocolVersion
} = require('../validators/spec');
//	Request.
const { validateMethod } = require('../validators/request');


/**
 * Creates RPC handler.
 *
 * @param {Object} options
 * @param {String} [options.providedBy]
 *
 * @access public
 */
module.exports = function buildRPC(options={}) {
	try {
		ensure(options.providedBy, 'string,required', 'options.providedBy');

		const { providedBy } = options;

		return (req, res) => _buildHandler(req, res, providedBy);
	}
	catch(error) {
		throw error;
	}
}

async function _buildHandler(req, res, providedBy) {
	try {
		validateBody(req.body);
	}
	catch(error) {
		const id = null;
		return respondWithError(res, error, id);
	}

	const { body } = req;

	try {
		// Determine the name of the called method from
		// request body object:
		const {
			jsonrpc,
			id,

			method,
			params
		} = body;

		// Request validation.
		validateProtocolVersion(jsonrpc);

		// req._routing object holds:
		// * {String} route - current request route
		// * {NodesterRouter} router - the router where route was matchdd.
		const { router } = req._routing;

		const provider = router.providers.get(providedBy);

		// Will throw error, if method does not exist inside provider.
		validateMethod(method, provider);


		// Add info about request:
		req.rpc = {
			id,
			method,
			params
		}

		// Procceed:
		const providerMethod = provider[method];
		return providerMethod(req, res);
	}
	catch(error) {
		if (!body.id) {
			console.error(error);
			res.end();
			return Promise.resolve();
		}

		return respondWithError(res, error, body.id);
	}
}
