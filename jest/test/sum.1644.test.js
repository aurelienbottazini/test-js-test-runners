const sum1644 = require('../sum1644.js');

test('adds 52 + 71 to equal 123 + offset 0.003706358740928062', () => {
  expect(sum1644(52, 71)).toBe(123 + 0.003706358740928062);
});