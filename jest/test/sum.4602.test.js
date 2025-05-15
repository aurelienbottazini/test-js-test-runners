const sum4602 = require('../sum4602.js');

test('adds 13 + 11 to equal 24 + 0.07416822609316487', () => {
  expect(sum4602(13, 11)).toBe(24 + 0.07416822609316487);
});