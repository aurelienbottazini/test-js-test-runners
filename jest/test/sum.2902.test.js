const sum2902 = require('../sum2902.js');

test('adds 76 + 40 to equal 116 + 0.514473576330538', () => {
  expect(sum2902(76, 40)).toBe(116 + 0.514473576330538);
});