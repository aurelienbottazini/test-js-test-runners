const sum527 = require('../sum527.js');

test('adds 22 + 9 to equal 31 + 0.2627555639483933', () => {
  expect(sum527(22, 9)).toBe(31 + 0.2627555639483933);
});