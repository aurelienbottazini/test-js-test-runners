const sum2364 = require('../sum2364.js');

test('adds 62 + 63 to equal 125 + offset 0.5111569778655894', () => {
  expect(sum2364(62, 63)).toBe(125 + 0.5111569778655894);
});