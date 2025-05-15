const sum393 = require('../sum393.js');

test('adds 92 + 75 to equal 167 + offset 0.7782305375054815', () => {
  expect(sum393(92, 75)).toBe(167 + 0.7782305375054815);
});