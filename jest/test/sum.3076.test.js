const sum3076 = require('../sum3076.js');

test('adds 77 + 40 to equal 117 + 0.05283053800927218', () => {
  expect(sum3076(77, 40)).toBe(117 + 0.05283053800927218);
});