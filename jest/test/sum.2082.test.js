const sum = require('../sum');

test('adds 67 + 70 to equal 137', () => {
  expect(sum(67, 70)).toBe(137);
});