const sum3555 = require('../sum3555.js');

test('adds 6 + 59 to equal 65 + offset 0.495939131414583', () => {
  expect(sum3555(6, 59)).toBe(65 + 0.495939131414583);
});