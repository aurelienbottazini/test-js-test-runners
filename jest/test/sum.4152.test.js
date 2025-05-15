const sum4152 = require('../sum4152.js');

test('adds 67 + 74 to equal 141 + 0.4802400391197693', () => {
  expect(sum4152(67, 74)).toBe(141 + 0.4802400391197693);
});