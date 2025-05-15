const sum4253 = require('../sum4253.js');

test('adds 42 + 98 to equal 140 + 0.9866624389915067', () => {
  expect(sum4253(42, 98)).toBe(140 + 0.9866624389915067);
});