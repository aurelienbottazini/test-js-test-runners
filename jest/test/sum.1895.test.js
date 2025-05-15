const sum1895 = require('../sum1895.js');

test('adds 86 + 27 to equal 113 + offset 0.7544123350446832', () => {
  expect(sum1895(86, 27)).toBe(113 + 0.7544123350446832);
});