const sum = require('../sum');

test('adds 30 + 42 to equal 72', () => {
  expect(sum(30, 42)).toBe(72);
});