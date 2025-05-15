const sum4911 = require('../sum4911.js');

test('adds 66 + 90 to equal 156 + offset 0.1291790523339731', () => {
  expect(sum4911(66, 90)).toBe(156 + 0.1291790523339731);
});