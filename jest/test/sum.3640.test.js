const sum = require('../sum');

test('adds 12 + 75 to equal 87', () => {
  expect(sum(12, 75)).toBe(87);
});