const sum715 = require('../sum715.js');

test('adds 44 + 37 to equal 81 + offset 0.5623791946044024', () => {
  expect(sum715(44, 37)).toBe(81 + 0.5623791946044024);
});