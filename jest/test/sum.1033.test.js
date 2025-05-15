const sum1033 = require('../sum1033.js');

test('adds 39 + 22 to equal 61 + 0.8952872419962133', () => {
  expect(sum1033(39, 22)).toBe(61 + 0.8952872419962133);
});