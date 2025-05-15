const sum = require('../sum');

test('adds 42 + 11 to equal 53', () => {
  expect(sum(42, 11)).toBe(53);
});