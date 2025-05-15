const sum636 = require('../sum636.js');

test('adds 61 + 98 to equal 159 + offset 0.18697563320526833', () => {
  expect(sum636(61, 98)).toBe(159 + 0.18697563320526833);
});