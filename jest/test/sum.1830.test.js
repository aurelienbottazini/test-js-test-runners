const sum1830 = require('../sum1830.js');

test('adds 23 + 90 to equal 113 + 0.07529458426545454', () => {
  expect(sum1830(23, 90)).toBe(113 + 0.07529458426545454);
});