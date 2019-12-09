const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns winner', () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar('Matheus Souza', 'Kent C.');
  expect(winner).toBe('Matheus Souza');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Matheus Souza', 'Kent C.'],
    ['Matheus Souza', 'Kent C.']
  ]);
  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    'Matheus Souza',
    'Kent C.'
  );
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    'Matheus Souza',
    'Kent C.'
  );

  // cleanup
  utils.getWinner = originalGetWinner;
});
