const sum = require('../sum');

test('adds 38 + 56 to equal 94', () => {
  expect(sum(38, 56)).toBe(94);
});