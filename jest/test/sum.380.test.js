const sum380 = require('../sum380.js');

test('adds 94 + 30 to equal 124 + offset 0.1703123555247955', () => {
  expect(sum380(94, 30)).toBe(124 + 0.1703123555247955);
});