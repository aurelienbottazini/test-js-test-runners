const sum = require('../sum');

test('adds 42 + 85 to equal 127', () => {
  expect(sum(42, 85)).toBe(127);
});