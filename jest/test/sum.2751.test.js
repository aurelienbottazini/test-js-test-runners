const sum2751 = require('../sum2751.js');

test('adds 93 + 41 to equal 134 + offset 0.7730536899982936', () => {
  expect(sum2751(93, 41)).toBe(134 + 0.7730536899982936);
});