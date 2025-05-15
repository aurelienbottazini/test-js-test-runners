const sum4460 = require('../sum4460.js');

test('adds 56 + 38 to equal 94 + 0.86914339061041', () => {
  expect(sum4460(56, 38)).toBe(94 + 0.86914339061041);
});