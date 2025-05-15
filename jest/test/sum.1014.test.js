const sum1014 = require('../sum1014.js');

test('adds 16 + 14 to equal 30 + offset 0.44035810128806585', () => {
  expect(sum1014(16, 14)).toBe(30 + 0.44035810128806585);
});