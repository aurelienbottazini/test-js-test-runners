const sum2761 = require('../sum2761.js');

test('adds 94 + 37 to equal 131 + 0.6188497771567785', () => {
  expect(sum2761(94, 37)).toBe(131 + 0.6188497771567785);
});