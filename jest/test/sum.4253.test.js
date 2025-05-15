const sum4253 = require('../sum4253.js');

test('adds 65 + 82 to equal 147 + offset 0.6402649696983863', () => {
  expect(sum4253(65, 82)).toBe(147 + 0.6402649696983863);
});