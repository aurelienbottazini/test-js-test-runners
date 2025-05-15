const sum3510 = require('../sum3510.js');

test('adds 80 + 37 to equal 117 + offset 0.6543461342972857', () => {
  expect(sum3510(80, 37)).toBe(117 + 0.6543461342972857);
});