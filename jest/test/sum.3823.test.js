const sum = require('../sum');

test('adds 47 + 34 to equal 81', () => {
  expect(sum(47, 34)).toBe(81);
});