const sum = require('../sum');

test('adds 11 + 44 to equal 55', () => {
  expect(sum(11, 44)).toBe(55);
});