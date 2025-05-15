const sum1442 = require('../sum1442.js');

test('adds 36 + 25 to equal 61 + offset 0.899215457256843', () => {
  expect(sum1442(36, 25)).toBe(61 + 0.899215457256843);
});