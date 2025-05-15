const sum3524 = require('../sum3524.js');

test('adds 6 + 87 to equal 93 + 0.5859523234211391', () => {
  expect(sum3524(6, 87)).toBe(93 + 0.5859523234211391);
});