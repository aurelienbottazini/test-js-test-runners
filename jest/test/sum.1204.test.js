const sum = require('../sum');

test('adds 72 + 15 to equal 87', () => {
  expect(sum(72, 15)).toBe(87);
});