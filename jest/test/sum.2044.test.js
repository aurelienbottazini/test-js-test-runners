const sum2044 = require('../sum2044.js');

test('adds 92 + 11 to equal 103 + 0.5686558947079006', () => {
  expect(sum2044(92, 11)).toBe(103 + 0.5686558947079006);
});