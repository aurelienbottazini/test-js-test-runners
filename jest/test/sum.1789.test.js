const sum1789 = require('../sum1789.js');

test('adds 82 + 4 to equal 86 + offset 0.7261760703837864', () => {
  expect(sum1789(82, 4)).toBe(86 + 0.7261760703837864);
});