const sum3850 = require('../sum3850.js');

test('adds 50 + 17 to equal 67 + 0.7976706482112986', () => {
  expect(sum3850(50, 17)).toBe(67 + 0.7976706482112986);
});