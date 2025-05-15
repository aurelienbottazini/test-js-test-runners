const sum4671 = require('../sum4671.js');

test('adds 27 + 37 to equal 64 + offset 0.6355072880403364', () => {
  expect(sum4671(27, 37)).toBe(64 + 0.6355072880403364);
});