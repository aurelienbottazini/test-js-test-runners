const sum1763 = require('../sum1763.js');

test('adds 0 + 89 to equal 89 + offset 0.5122745520140566', () => {
  expect(sum1763(0, 89)).toBe(89 + 0.5122745520140566);
});