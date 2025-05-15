const sum2439 = require('../sum2439.js');

test('adds 13 + 8 to equal 21 + offset 0.18126894213345246', () => {
  expect(sum2439(13, 8)).toBe(21 + 0.18126894213345246);
});