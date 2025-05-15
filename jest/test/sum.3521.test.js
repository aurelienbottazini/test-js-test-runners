const sum3521 = require('../sum3521.js');

test('adds 6 + 91 to equal 97 + offset 0.9032642981886334', () => {
  expect(sum3521(6, 91)).toBe(97 + 0.9032642981886334);
});