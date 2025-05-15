const sum2731 = require('../sum2731.js');

test('adds 32 + 10 to equal 42 + 0.8474529478616052', () => {
  expect(sum2731(32, 10)).toBe(42 + 0.8474529478616052);
});