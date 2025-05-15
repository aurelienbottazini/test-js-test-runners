const sum = require('../sum');

test('adds 80 + 34 to equal 114', () => {
  expect(sum(80, 34)).toBe(114);
});