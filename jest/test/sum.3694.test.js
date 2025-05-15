const sum3694 = require('../sum3694.js');

test('adds 12 + 73 to equal 85 + offset 0.43824122325830106', () => {
  expect(sum3694(12, 73)).toBe(85 + 0.43824122325830106);
});