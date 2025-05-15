const sum = require('../sum');

test('adds 22 + 34 to equal 56', () => {
  expect(sum(22, 34)).toBe(56);
});