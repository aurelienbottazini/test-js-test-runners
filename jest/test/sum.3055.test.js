const sum3055 = require('../sum3055.js');

test('adds 24 + 27 to equal 51 + offset 0.932733248598769', () => {
  expect(sum3055(24, 27)).toBe(51 + 0.932733248598769);
});