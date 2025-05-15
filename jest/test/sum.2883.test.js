const sum2883 = require('../sum2883.js');

test('adds 56 + 82 to equal 138 + 0.8920679952690911', () => {
  expect(sum2883(56, 82)).toBe(138 + 0.8920679952690911);
});