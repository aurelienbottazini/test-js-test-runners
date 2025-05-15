const sum = require('../sum');

test('adds 50 + 11 to equal 61', () => {
  expect(sum(50, 11)).toBe(61);
});