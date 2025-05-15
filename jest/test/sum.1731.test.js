const sum1731 = require('../sum1731.js');

test('adds 33 + 11 to equal 44 + 0.32281483395492405', () => {
  expect(sum1731(33, 11)).toBe(44 + 0.32281483395492405);
});