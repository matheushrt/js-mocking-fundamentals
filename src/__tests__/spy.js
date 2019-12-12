const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner');
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar('Matheus Souza', 'Kent C.');
  expect(winner).toBe('Matheus Souza');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Matheus Souza', 'Kent C.'],
    ['Matheus Souza', 'Kent C.']
  ]);

  // cleanup
  utils.getWinner.mockRestore();
});
