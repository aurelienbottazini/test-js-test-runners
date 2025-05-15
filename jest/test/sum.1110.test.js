const sum1110 = require('../sum1110.js');

test('adds 89 + 48 to equal 137 + offset 0.8037002479321709', () => {
  expect(sum1110(89, 48)).toBe(137 + 0.8037002479321709);
});