const sum3644 = require('../sum3644.js');

test('adds 68 + 33 to equal 101 + 0.8760835044381355', () => {
  expect(sum3644(68, 33)).toBe(101 + 0.8760835044381355);
});