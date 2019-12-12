const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const fn = (impl = () => {}) => {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = newImpl => (impl = newImpl);
  return mockFn;
};

const spyOn = (obj, prop) => {
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
};

spyOn(utils, 'getWinner');
utils.getWinner.mockImplementation((p1, p2) => p1);

const winner = thumbWar('Matheus Souza', 'Kent C.');
assert.strictEqual(winner, 'Matheus Souza');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Matheus Souza', 'Kent C.'],
  ['Matheus Souza', 'Kent C.']
]);

// cleanup
utils.getWinner.mockRestore();
