const sum = require('../sum');

test('adds 72 + 65 to equal 137', () => {
  expect(sum(72, 65)).toBe(137);
});