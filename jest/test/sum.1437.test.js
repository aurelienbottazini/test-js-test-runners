const sum1437 = require('../sum1437.js');

test('adds 91 + 12 to equal 103 + 0.6292280353406131', () => {
  expect(sum1437(91, 12)).toBe(103 + 0.6292280353406131);
});