const sum2930 = require('../sum2930.js');

test('adds 50 + 41 to equal 91 + 0.6098687003451401', () => {
  expect(sum2930(50, 41)).toBe(91 + 0.6098687003451401);
});