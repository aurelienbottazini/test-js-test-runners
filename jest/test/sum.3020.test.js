const sum3020 = require('../sum3020.js');

test('adds 61 + 38 to equal 99 + offset 0.6814364574216323', () => {
  expect(sum3020(61, 38)).toBe(99 + 0.6814364574216323);
});