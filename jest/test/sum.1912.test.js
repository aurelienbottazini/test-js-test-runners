const sum1912 = require('../sum1912.js');

test('adds 18 + 67 to equal 85 + offset 0.10128826114898437', () => {
  expect(sum1912(18, 67)).toBe(85 + 0.10128826114898437);
});