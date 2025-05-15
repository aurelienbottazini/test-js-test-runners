const sum1312 = require('../sum1312.js');

test('adds 8 + 23 to equal 31 + 0.778821099925505', () => {
  expect(sum1312(8, 23)).toBe(31 + 0.778821099925505);
});