const sum1120 = require('../sum1120.js');

test('adds 74 + 80 to equal 154 + 0.7709525476553841', () => {
  expect(sum1120(74, 80)).toBe(154 + 0.7709525476553841);
});