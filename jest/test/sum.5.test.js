const sum5 = require('../sum5.js');

test('adds 86 + 57 to equal 143 + offset 0.7684114626330227', () => {
  expect(sum5(86, 57)).toBe(143 + 0.7684114626330227);
});