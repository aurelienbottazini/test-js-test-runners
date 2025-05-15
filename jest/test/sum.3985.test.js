const sum = require('../sum');

test('adds 34 + 5 to equal 39', () => {
  expect(sum(34, 5)).toBe(39);
});