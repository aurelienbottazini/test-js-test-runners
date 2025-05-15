const sum = require('../sum');

test('adds 20 + 35 to equal 55', () => {
  expect(sum(20, 35)).toBe(55);
});