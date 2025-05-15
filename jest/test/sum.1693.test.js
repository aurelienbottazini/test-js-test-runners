const sum = require('../sum');

test('adds 54 + 83 to equal 137', () => {
  expect(sum(54, 83)).toBe(137);
});