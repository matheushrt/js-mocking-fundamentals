require('../__no-framework-mocks__/utils'); // prime the cache
const utilsPath = require.resolve('../utils');
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils');
require.cache[utilsPath] = require.cache[mockUtilsPath];

const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const winner = thumbWar('Matheus Souza', 'Kent C.');
assert.strictEqual(winner, 'Matheus Souza');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Matheus Souza', 'Kent C.'],
  ['Matheus Souza', 'Kent C.']
]);

// cleanup
delete require.cache[utilsPath];
