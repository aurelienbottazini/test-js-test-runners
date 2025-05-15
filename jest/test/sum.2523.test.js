const sum2523 = require('../sum2523.js');

test('adds 27 + 77 to equal 104 + offset 0.6920736061954738', () => {
  expect(sum2523(27, 77)).toBe(104 + 0.6920736061954738);
});