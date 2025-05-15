const sum1600 = require('../sum1600.js');

test('adds 30 + 89 to equal 119 + offset 0.5987150918554136', () => {
  expect(sum1600(30, 89)).toBe(119 + 0.5987150918554136);
});