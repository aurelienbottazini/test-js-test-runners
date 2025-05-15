const sum3185 = require('../sum3185.js');

test('adds 74 + 0 to equal 74 + offset 0.7321654577225636', () => {
  expect(sum3185(74, 0)).toBe(74 + 0.7321654577225636);
});