const sum = require('../sum');

test('adds 85 + 52 to equal 137', () => {
  expect(sum(85, 52)).toBe(137);
});