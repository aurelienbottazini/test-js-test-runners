const sum1888 = require('../sum1888.js');

test('adds 20 + 14 to equal 34 + offset 0.7302596177454561', () => {
  expect(sum1888(20, 14)).toBe(34 + 0.7302596177454561);
});