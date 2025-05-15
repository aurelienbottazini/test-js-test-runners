const sum = require('../sum');

test('adds 12 + 49 to equal 61', () => {
  expect(sum(12, 49)).toBe(61);
});