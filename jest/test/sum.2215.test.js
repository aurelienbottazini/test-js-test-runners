const sum2215 = require('../sum2215.js');

test('adds 48 + 15 to equal 63 + 0.42668560083431817', () => {
  expect(sum2215(48, 15)).toBe(63 + 0.42668560083431817);
});