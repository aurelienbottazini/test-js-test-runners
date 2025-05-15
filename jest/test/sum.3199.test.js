const sum3199 = require('../sum3199.js');

test('adds 29 + 98 to equal 127 + 0.5912039432561186', () => {
  expect(sum3199(29, 98)).toBe(127 + 0.5912039432561186);
});