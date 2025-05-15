const sum1911 = require('../sum1911.js');

test('adds 36 + 21 to equal 57 + 0.16613331496232842', () => {
  expect(sum1911(36, 21)).toBe(57 + 0.16613331496232842);
});