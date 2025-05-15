const sum2601 = require('../sum2601.js');

test('adds 66 + 75 to equal 141 + offset 0.20315389264643746', () => {
  expect(sum2601(66, 75)).toBe(141 + 0.20315389264643746);
});