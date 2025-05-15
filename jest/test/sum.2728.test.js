const sum2728 = require('../sum2728.js');

test('adds 12 + 68 to equal 80 + offset 0.3698213021085278', () => {
  expect(sum2728(12, 68)).toBe(80 + 0.3698213021085278);
});