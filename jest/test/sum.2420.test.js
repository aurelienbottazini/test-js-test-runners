const sum = require('../sum');

test('adds 70 + 67 to equal 137', () => {
  expect(sum(70, 67)).toBe(137);
});