const sum1119 = require('../sum1119.js');

test('adds 7 + 28 to equal 35 + offset 0.37011564022040766', () => {
  expect(sum1119(7, 28)).toBe(35 + 0.37011564022040766);
});