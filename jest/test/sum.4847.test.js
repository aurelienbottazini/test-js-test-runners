const sum4847 = require('../sum4847.js');

test('adds 99 + 25 to equal 124 + offset 0.41259596847024305', () => {
  expect(sum4847(99, 25)).toBe(124 + 0.41259596847024305);
});