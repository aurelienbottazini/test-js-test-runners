const sum1783 = require('../sum1783.js');

test('adds 24 + 16 to equal 40 + 0.6702615903028339', () => {
  expect(sum1783(24, 16)).toBe(40 + 0.6702615903028339);
});