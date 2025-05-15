const sum3337 = require('../sum3337.js');

test('adds 65 + 15 to equal 80 + offset 0.7436399685003783', () => {
  expect(sum3337(65, 15)).toBe(80 + 0.7436399685003783);
});