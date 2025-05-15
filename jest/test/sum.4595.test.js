const sum = require('../sum');

test('adds 60 + 34 to equal 94', () => {
  expect(sum(60, 34)).toBe(94);
});