const sum1953 = require('../sum1953.js');

test('adds 14 + 50 to equal 64 + 0.8244025065948817', () => {
  expect(sum1953(14, 50)).toBe(64 + 0.8244025065948817);
});