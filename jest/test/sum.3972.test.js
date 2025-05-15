const sum3972 = require('../sum3972.js');

test('adds 38 + 5 to equal 43 + 0.3935478966203897', () => {
  expect(sum3972(38, 5)).toBe(43 + 0.3935478966203897);
});