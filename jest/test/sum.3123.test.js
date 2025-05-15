const sum3123 = require('../sum3123.js');

test('adds 74 + 53 to equal 127 + offset 0.694068136000847', () => {
  expect(sum3123(74, 53)).toBe(127 + 0.694068136000847);
});