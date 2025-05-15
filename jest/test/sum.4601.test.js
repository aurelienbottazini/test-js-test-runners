const sum = require('../sum');

test('adds 9 + 85 to equal 94', () => {
  expect(sum(9, 85)).toBe(94);
});