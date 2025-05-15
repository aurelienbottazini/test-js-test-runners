const sum2310 = require('../sum2310.js');

test('adds 41 + 72 to equal 113 + 0.4610758596158555', () => {
  expect(sum2310(41, 72)).toBe(113 + 0.4610758596158555);
});