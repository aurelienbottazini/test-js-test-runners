const sum2370 = require('../sum2370.js');

test('adds 10 + 78 to equal 88 + 0.7531932673827646', () => {
  expect(sum2370(10, 78)).toBe(88 + 0.7531932673827646);
});