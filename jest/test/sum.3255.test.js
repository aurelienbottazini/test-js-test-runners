const sum3255 = require('../sum3255.js');

test('adds 20 + 31 to equal 51 + 0.5020265453210917', () => {
  expect(sum3255(20, 31)).toBe(51 + 0.5020265453210917);
});