const sum2281 = require('../sum2281.js');

test('adds 6 + 26 to equal 32 + 0.790240123200291', () => {
  expect(sum2281(6, 26)).toBe(32 + 0.790240123200291);
});