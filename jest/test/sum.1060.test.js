const sum = require('../sum');

test('adds 1 + 31 to equal 32', () => {
  expect(sum(1, 31)).toBe(32);
});