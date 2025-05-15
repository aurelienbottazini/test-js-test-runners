const sum815 = require('../sum815.js');

test('adds 45 + 56 to equal 101 + offset 0.45125741209739434', () => {
  expect(sum815(45, 56)).toBe(101 + 0.45125741209739434);
});