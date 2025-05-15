const sum788 = require('../sum788.js');

test('adds 87 + 8 to equal 95 + offset 0.603746809601853', () => {
  expect(sum788(87, 8)).toBe(95 + 0.603746809601853);
});