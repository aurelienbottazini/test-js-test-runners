const sum1493 = require('../sum1493.js');

test('adds 63 + 28 to equal 91 + offset 0.9053520648946262', () => {
  expect(sum1493(63, 28)).toBe(91 + 0.9053520648946262);
});