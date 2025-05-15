const sum = require('../sum');

test('adds 61 + 34 to equal 95', () => {
  expect(sum(61, 34)).toBe(95);
});