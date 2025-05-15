const sum150 = require('../sum150.js');

test('adds 53 + 58 to equal 111 + offset 0.9094650693489206', () => {
  expect(sum150(53, 58)).toBe(111 + 0.9094650693489206);
});