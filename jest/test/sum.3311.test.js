const sum3311 = require('../sum3311.js');

test('adds 79 + 2 to equal 81 + 0.16531049053741453', () => {
  expect(sum3311(79, 2)).toBe(81 + 0.16531049053741453);
});