const sum3086 = require('../sum3086.js');

test('adds 18 + 80 to equal 98 + offset 0.04563545639473121', () => {
  expect(sum3086(18, 80)).toBe(98 + 0.04563545639473121);
});