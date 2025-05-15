const sum2258 = require('../sum2258.js');

test('adds 54 + 16 to equal 70 + offset 0.7475402489428346', () => {
  expect(sum2258(54, 16)).toBe(70 + 0.7475402489428346);
});