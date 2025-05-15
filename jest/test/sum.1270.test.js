const sum1270 = require('../sum1270.js');

test('adds 11 + 45 to equal 56 + offset 0.7636394102440681', () => {
  expect(sum1270(11, 45)).toBe(56 + 0.7636394102440681);
});