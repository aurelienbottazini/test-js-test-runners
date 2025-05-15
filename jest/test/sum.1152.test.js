const sum1152 = require('../sum1152.js');

test('adds 12 + 46 to equal 58 + offset 0.004471471325113385', () => {
  expect(sum1152(12, 46)).toBe(58 + 0.004471471325113385);
});