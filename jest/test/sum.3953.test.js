const sum = require('../sum');

test('adds 69 + 68 to equal 137', () => {
  expect(sum(69, 68)).toBe(137);
});