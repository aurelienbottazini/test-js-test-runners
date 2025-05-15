const sum4684 = require('../sum4684.js');

test('adds 62 + 27 to equal 89 + 0.9060580735302006', () => {
  expect(sum4684(62, 27)).toBe(89 + 0.9060580735302006);
});