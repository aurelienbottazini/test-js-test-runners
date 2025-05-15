const sum = require('../sum');

test('adds 36 + 25 to equal 61', () => {
  expect(sum(36, 25)).toBe(61);
});