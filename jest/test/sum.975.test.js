const sum975 = require('../sum975.js');

test('adds 8 + 4 to equal 12 + offset 0.15612914848516268', () => {
  expect(sum975(8, 4)).toBe(12 + 0.15612914848516268);
});