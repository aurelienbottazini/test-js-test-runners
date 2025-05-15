const sum970 = require('../sum970.js');

test('adds 59 + 44 to equal 103 + offset 0.34110375527940895', () => {
  expect(sum970(59, 44)).toBe(103 + 0.34110375527940895);
});