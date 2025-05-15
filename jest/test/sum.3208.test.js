const sum3208 = require('../sum3208.js');

test('adds 40 + 79 to equal 119 + 0.9264771073788286', () => {
  expect(sum3208(40, 79)).toBe(119 + 0.9264771073788286);
});