'use strict';

const packageOne = require('..');
const assert = require('assert').strict;

assert.strictEqual(packageOne(), 'Hello from packageOne');
console.info('packageOne tests passed');
