const sum1021 = require('../sum1021.js');

test('adds 95 + 72 to equal 167 + offset 0.8589074126688148', () => {
  expect(sum1021(95, 72)).toBe(167 + 0.8589074126688148);
});