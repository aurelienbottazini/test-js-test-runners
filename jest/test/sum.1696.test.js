const sum1696 = require('../sum1696.js');

test('adds 11 + 14 to equal 25 + offset 0.5265048443578904', () => {
  expect(sum1696(11, 14)).toBe(25 + 0.5265048443578904);
});