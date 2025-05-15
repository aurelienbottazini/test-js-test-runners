const sum3396 = require('../sum3396.js');

test('adds 49 + 55 to equal 104 + offset 0.7420597438266503', () => {
  expect(sum3396(49, 55)).toBe(104 + 0.7420597438266503);
});