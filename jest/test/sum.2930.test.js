const sum = require('../sum');

test('adds 17 + 44 to equal 61', () => {
  expect(sum(17, 44)).toBe(61);
});