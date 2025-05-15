const sum456 = require('../sum456.js');

test('adds 56 + 81 to equal 137 + offset 0.9514382721935498', () => {
  expect(sum456(56, 81)).toBe(137 + 0.9514382721935498);
});