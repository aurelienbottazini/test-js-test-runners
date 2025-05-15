const sum4345 = require('../sum4345.js');

test('adds 15 + 93 to equal 108 + 0.740460092659498', () => {
  expect(sum4345(15, 93)).toBe(108 + 0.740460092659498);
});