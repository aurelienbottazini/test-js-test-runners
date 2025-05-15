const sum4782 = require('../sum4782.js');

test('adds 13 + 23 to equal 36 + 0.8324932822472036', () => {
  expect(sum4782(13, 23)).toBe(36 + 0.8324932822472036);
});