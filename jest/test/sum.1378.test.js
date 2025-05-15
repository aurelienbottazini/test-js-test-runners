const sum1378 = require('../sum1378.js');

test('adds 43 + 62 to equal 105 + 0.8850374432760951', () => {
  expect(sum1378(43, 62)).toBe(105 + 0.8850374432760951);
});