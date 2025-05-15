const sum = require('../sum');

test('adds 37 + 50 to equal 87', () => {
  expect(sum(37, 50)).toBe(87);
});