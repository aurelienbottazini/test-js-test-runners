const sum4530 = require('../sum4530.js');

test('adds 68 + 28 to equal 96 + 0.001069414744457764', () => {
  expect(sum4530(68, 28)).toBe(96 + 0.001069414744457764);
});