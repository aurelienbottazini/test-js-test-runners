const sum = require('../sum');

test('adds 43 + 42 to equal 85', () => {
  expect(sum(43, 42)).toBe(85);
});