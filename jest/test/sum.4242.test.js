const sum4242 = require('../sum4242.js');

test('adds 70 + 37 to equal 107 + 0.10403346594574359', () => {
  expect(sum4242(70, 37)).toBe(107 + 0.10403346594574359);
});