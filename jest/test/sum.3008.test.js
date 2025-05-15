const sum3008 = require('../sum3008.js');

test('adds 45 + 85 to equal 130 + offset 0.4753162674143784', () => {
  expect(sum3008(45, 85)).toBe(130 + 0.4753162674143784);
});