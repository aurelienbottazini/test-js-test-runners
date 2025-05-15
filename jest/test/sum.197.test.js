const sum197 = require('../sum197.js');

test('adds 7 + 79 to equal 86 + offset 0.051673154127728216', () => {
  expect(sum197(7, 79)).toBe(86 + 0.051673154127728216);
});