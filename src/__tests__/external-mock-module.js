const thumbWar = require('../thumb-war');
const utilsMock = require('../utils');

jest.mock('../utils');

test('returns winner', () => {
  const winner = thumbWar('Matheus Souza', 'Kent C.');
  expect(winner).toBe('Matheus Souza');
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Matheus Souza', 'Kent C.'],
    ['Matheus Souza', 'Kent C.']
  ]);

  // cleanup
  utilsMock.getWinner.mockReset();
});
