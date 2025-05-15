const sum = require('../sum');

test('adds 6 + 12 to equal 18', () => {
  expect(sum(6, 12)).toBe(18);
});