const sum = require('../sum');

test('adds 57 + 80 to equal 137', () => {
  expect(sum(57, 80)).toBe(137);
});