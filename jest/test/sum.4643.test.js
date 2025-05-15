const sum = require('../sum');

test('adds 39 + 5 to equal 44', () => {
  expect(sum(39, 5)).toBe(44);
});