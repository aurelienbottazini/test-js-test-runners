const sum1157 = require('../sum1157.js');

test('adds 47 + 67 to equal 114 + offset 0.49947293588156294', () => {
  expect(sum1157(47, 67)).toBe(114 + 0.49947293588156294);
});