const sum3911 = require('../sum3911.js');

test('adds 8 + 26 to equal 34 + offset 0.4654916685792282', () => {
  expect(sum3911(8, 26)).toBe(34 + 0.4654916685792282);
});