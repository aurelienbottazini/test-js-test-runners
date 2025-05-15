const sum4948 = require('../sum4948.js');

test('adds 93 + 45 to equal 138 + offset 0.780067128178627', () => {
  expect(sum4948(93, 45)).toBe(138 + 0.780067128178627);
});