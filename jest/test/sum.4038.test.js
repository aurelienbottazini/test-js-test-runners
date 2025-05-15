const sum4038 = require('../sum4038.js');

test('adds 32 + 65 to equal 97 + 0.7582843573306309', () => {
  expect(sum4038(32, 65)).toBe(97 + 0.7582843573306309);
});