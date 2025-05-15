const sum = require('../sum');

test('adds 72 + 85 to equal 157', () => {
  expect(sum(72, 85)).toBe(157);
});