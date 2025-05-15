const sum = require('../sum');

test('adds 42 + 43 to equal 85', () => {
  expect(sum(42, 43)).toBe(85);
});