const sum3480 = require('../sum3480.js');

test('adds 32 + 48 to equal 80 + offset 0.8146920198698198', () => {
  expect(sum3480(32, 48)).toBe(80 + 0.8146920198698198);
});