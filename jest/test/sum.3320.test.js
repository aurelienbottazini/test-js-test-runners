const sum3320 = require('../sum3320.js');

test('adds 96 + 76 to equal 172 + 0.49677733125950385', () => {
  expect(sum3320(96, 76)).toBe(172 + 0.49677733125950385);
});