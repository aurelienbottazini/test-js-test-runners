const sum679 = require('../sum679.js');

test('adds 87 + 37 to equal 124 + 0.23196870293946648', () => {
  expect(sum679(87, 37)).toBe(124 + 0.23196870293946648);
});