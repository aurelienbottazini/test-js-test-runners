const sum1384 = require('../sum1384.js');

test('adds 62 + 27 to equal 89 + 0.43051454022277136', () => {
  expect(sum1384(62, 27)).toBe(89 + 0.43051454022277136);
});