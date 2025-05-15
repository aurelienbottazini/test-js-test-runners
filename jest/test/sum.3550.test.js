const sum = require('../sum');

test('adds 2 + 85 to equal 87', () => {
  expect(sum(2, 85)).toBe(87);
});