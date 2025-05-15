const sum3597 = require('../sum3597.js');

test('adds 14 + 77 to equal 91 + offset 0.8017065738381295', () => {
  expect(sum3597(14, 77)).toBe(91 + 0.8017065738381295);
});