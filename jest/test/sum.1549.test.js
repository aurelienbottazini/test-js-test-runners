const sum = require('../sum');

test('adds 42 + 40 to equal 82', () => {
  expect(sum(42, 40)).toBe(82);
});