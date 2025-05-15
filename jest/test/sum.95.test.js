const sum = require('../sum');

test('adds 38 + 4 to equal 42', () => {
  expect(sum(38, 4)).toBe(42);
});