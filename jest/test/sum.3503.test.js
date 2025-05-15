const sum3503 = require('../sum3503.js');

test('adds 90 + 25 to equal 115 + offset 0.10892578852548973', () => {
  expect(sum3503(90, 25)).toBe(115 + 0.10892578852548973);
});