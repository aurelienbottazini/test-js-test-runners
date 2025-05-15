const sum4837 = require('../sum4837.js');

test('adds 86 + 23 to equal 109 + offset 0.9382015545984894', () => {
  expect(sum4837(86, 23)).toBe(109 + 0.9382015545984894);
});