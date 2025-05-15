const sum3696 = require('../sum3696.js');

test('adds 76 + 49 to equal 125 + offset 0.5861916753854418', () => {
  expect(sum3696(76, 49)).toBe(125 + 0.5861916753854418);
});