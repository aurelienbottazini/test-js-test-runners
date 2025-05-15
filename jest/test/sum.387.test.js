const sum387 = require('../sum387.js');

test('adds 61 + 63 to equal 124 + 0.9680725077969877', () => {
  expect(sum387(61, 63)).toBe(124 + 0.9680725077969877);
});