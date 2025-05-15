const sum1289 = require('../sum1289.js');

test('adds 9 + 59 to equal 68 + offset 0.8856599789261494', () => {
  expect(sum1289(9, 59)).toBe(68 + 0.8856599789261494);
});