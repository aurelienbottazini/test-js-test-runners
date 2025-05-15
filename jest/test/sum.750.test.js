const sum = require('../sum');

test('adds 1 + 34 to equal 35', () => {
  expect(sum(1, 34)).toBe(35);
});