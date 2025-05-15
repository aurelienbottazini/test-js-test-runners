const sum3188 = require('../sum3188.js');

test('adds 53 + 37 to equal 90 + 0.4111006871185603', () => {
  expect(sum3188(53, 37)).toBe(90 + 0.4111006871185603);
});