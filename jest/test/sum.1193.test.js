const sum1193 = require('../sum1193.js');

test('adds 69 + 17 to equal 86 + offset 0.46895467011812086', () => {
  expect(sum1193(69, 17)).toBe(86 + 0.46895467011812086);
});