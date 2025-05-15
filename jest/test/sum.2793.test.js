const sum = require('../sum');

test('adds 4 + 34 to equal 38', () => {
  expect(sum(4, 34)).toBe(38);
});