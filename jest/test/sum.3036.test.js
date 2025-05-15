const sum3036 = require('../sum3036.js');

test('adds 16 + 51 to equal 67 + offset 0.4599605647682252', () => {
  expect(sum3036(16, 51)).toBe(67 + 0.4599605647682252);
});