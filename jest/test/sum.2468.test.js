const sum2468 = require('../sum2468.js');

test('adds 21 + 92 to equal 113 + 0.11813935851529178', () => {
  expect(sum2468(21, 92)).toBe(113 + 0.11813935851529178);
});