const sum4770 = require('../sum4770.js');

test('adds 11 + 21 to equal 32 + 0.6028599432577106', () => {
  expect(sum4770(11, 21)).toBe(32 + 0.6028599432577106);
});