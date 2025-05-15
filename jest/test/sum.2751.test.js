const sum = require('../sum');

test('adds 58 + 99 to equal 157', () => {
  expect(sum(58, 99)).toBe(157);
});