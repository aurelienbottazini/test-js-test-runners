const sum4788 = require('../sum4788.js');

test('adds 16 + 41 to equal 57 + offset 0.4946983148285079', () => {
  expect(sum4788(16, 41)).toBe(57 + 0.4946983148285079);
});