const sum1040 = require('../sum1040.js');

test('adds 96 + 71 to equal 167 + offset 0.1014557297160611', () => {
  expect(sum1040(96, 71)).toBe(167 + 0.1014557297160611);
});