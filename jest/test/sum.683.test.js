const sum683 = require('../sum683.js');

test('adds 8 + 83 to equal 91 + offset 0.34593470071888555', () => {
  expect(sum683(8, 83)).toBe(91 + 0.34593470071888555);
});