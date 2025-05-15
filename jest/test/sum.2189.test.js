const sum = require('../sum');

test('adds 39 + 48 to equal 87', () => {
  expect(sum(39, 48)).toBe(87);
});