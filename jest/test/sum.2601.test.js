const sum2601 = require('../sum2601.js');

test('adds 20 + 16 to equal 36 + 0.7864354656996532', () => {
  expect(sum2601(20, 16)).toBe(36 + 0.7864354656996532);
});