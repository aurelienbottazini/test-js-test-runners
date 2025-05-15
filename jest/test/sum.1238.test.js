const sum1238 = require('../sum1238.js');

test('adds 36 + 41 to equal 77 + 0.8056757424385957', () => {
  expect(sum1238(36, 41)).toBe(77 + 0.8056757424385957);
});