const sum = require('../sum');

test('adds 34 + 21 to equal 55', () => {
  expect(sum(34, 21)).toBe(55);
});