const sum3223 = require('../sum3223.js');

test('adds 53 + 27 to equal 80 + 0.09575710659655035', () => {
  expect(sum3223(53, 27)).toBe(80 + 0.09575710659655035);
});