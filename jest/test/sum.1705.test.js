const sum1705 = require('../sum1705.js');

test('adds 91 + 17 to equal 108 + offset 0.0493781317386115', () => {
  expect(sum1705(91, 17)).toBe(108 + 0.0493781317386115);
});