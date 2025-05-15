const sum4137 = require('../sum4137.js');

test('adds 71 + 6 to equal 77 + 0.12609666886792592', () => {
  expect(sum4137(71, 6)).toBe(77 + 0.12609666886792592);
});