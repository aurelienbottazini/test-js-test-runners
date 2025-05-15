const sum1818 = require('../sum1818.js');

test('adds 76 + 46 to equal 122 + offset 0.5370749515215426', () => {
  expect(sum1818(76, 46)).toBe(122 + 0.5370749515215426);
});