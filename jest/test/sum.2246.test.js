const sum2246 = require('../sum2246.js');

test('adds 29 + 11 to equal 40 + offset 0.9258817113326718', () => {
  expect(sum2246(29, 11)).toBe(40 + 0.9258817113326718);
});