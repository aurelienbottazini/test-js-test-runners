const sum = require('../sum');

test('adds 42 + 1 to equal 43', () => {
  expect(sum(42, 1)).toBe(43);
});