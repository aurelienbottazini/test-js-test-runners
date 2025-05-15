const sum1710 = require('../sum1710.js');

test('adds 98 + 86 to equal 184 + 0.40971747721663554', () => {
  expect(sum1710(98, 86)).toBe(184 + 0.40971747721663554);
});