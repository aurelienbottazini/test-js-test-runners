const sum = require('../sum');

test('adds 18 + 76 to equal 94', () => {
  expect(sum(18, 76)).toBe(94);
});