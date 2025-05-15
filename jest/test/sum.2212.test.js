const sum2212 = require('../sum2212.js');

test('adds 80 + 77 to equal 157 + 0.375165392155703', () => {
  expect(sum2212(80, 77)).toBe(157 + 0.375165392155703);
});