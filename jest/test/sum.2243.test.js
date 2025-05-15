const sum2243 = require('../sum2243.js');

test('adds 90 + 13 to equal 103 + offset 0.22142659951471522', () => {
  expect(sum2243(90, 13)).toBe(103 + 0.22142659951471522);
});