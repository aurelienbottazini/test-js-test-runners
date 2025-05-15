const sum1783 = require('../sum1783.js');

test('adds 42 + 32 to equal 74 + offset 0.8657803408123209', () => {
  expect(sum1783(42, 32)).toBe(74 + 0.8657803408123209);
});