const sum2783 = require('../sum2783.js');

test('adds 71 + 51 to equal 122 + 0.6710227280185702', () => {
  expect(sum2783(71, 51)).toBe(122 + 0.6710227280185702);
});