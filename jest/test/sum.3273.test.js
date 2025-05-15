const sum3273 = require('../sum3273.js');

test('adds 86 + 18 to equal 104 + 0.08459984125021758', () => {
  expect(sum3273(86, 18)).toBe(104 + 0.08459984125021758);
});