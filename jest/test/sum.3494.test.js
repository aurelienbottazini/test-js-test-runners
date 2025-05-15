const sum3494 = require('../sum3494.js');

test('adds 12 + 10 to equal 22 + 0.15025867273975635', () => {
  expect(sum3494(12, 10)).toBe(22 + 0.15025867273975635);
});