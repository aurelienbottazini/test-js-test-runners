const sum1171 = require('../sum1171.js');

test('adds 54 + 72 to equal 126 + 0.8188481193777724', () => {
  expect(sum1171(54, 72)).toBe(126 + 0.8188481193777724);
});