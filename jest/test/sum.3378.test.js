const sum = require('../sum');

test('adds 17 + 34 to equal 51', () => {
  expect(sum(17, 34)).toBe(51);
});