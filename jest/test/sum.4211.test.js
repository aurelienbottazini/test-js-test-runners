const sum4211 = require('../sum4211.js');

test('adds 49 + 45 to equal 94 + 0.9224405173670761', () => {
  expect(sum4211(49, 45)).toBe(94 + 0.9224405173670761);
});