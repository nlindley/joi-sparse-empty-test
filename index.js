'use strict';

const Joi = require('joi');
const assert = require('assert');

const validator = Joi.array().items(Joi.object().empty({})).sparse(false);
const data = [{a: 1}, {}, {c: 3}];

const result = validator.validate(data);

console.log(result);

assert(result.error, 'Should have an error');
