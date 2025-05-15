const sum3700 = require('../sum3700.js');

test('adds 0 + 49 to equal 49 + offset 0.6325872974424482', () => {
  expect(sum3700(0, 49)).toBe(49 + 0.6325872974424482);
});