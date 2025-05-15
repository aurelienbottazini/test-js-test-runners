const sum4002 = require('../sum4002.js');

test('adds 95 + 63 to equal 158 + 0.3987610564737917', () => {
  expect(sum4002(95, 63)).toBe(158 + 0.3987610564737917);
});