const sum = require('../sum');

test('adds 85 + 2 to equal 87', () => {
  expect(sum(85, 2)).toBe(87);
});