const sum2719 = require('../sum2719.js');

test('adds 78 + 43 to equal 121 + 0.720536842603286', () => {
  expect(sum2719(78, 43)).toBe(121 + 0.720536842603286);
});