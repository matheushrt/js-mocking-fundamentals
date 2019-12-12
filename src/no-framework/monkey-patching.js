const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const originalGetWinner = utils.getWinner;
// mocking getWinner to avoid flakiness
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar('Matheus Souza', 'Kent C.');
assert.strictEqual(winner, 'Matheus Souza');

// cleanup
utils.getWinner = originalGetWinner;
