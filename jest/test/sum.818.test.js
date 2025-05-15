const sum818 = require('../sum818.js');

test('adds 32 + 20 to equal 52 + offset 0.13655951765766994', () => {
  expect(sum818(32, 20)).toBe(52 + 0.13655951765766994);
});