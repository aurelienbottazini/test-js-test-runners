const sum1924 = require('../sum1924.js');

test('adds 85 + 58 to equal 143 + offset 0.6070864008263229', () => {
  expect(sum1924(85, 58)).toBe(143 + 0.6070864008263229);
});