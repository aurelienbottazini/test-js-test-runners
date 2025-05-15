const sum1566 = require('../sum1566.js');

test('adds 3 + 67 to equal 70 + offset 0.2778696883723317', () => {
  expect(sum1566(3, 67)).toBe(70 + 0.2778696883723317);
});