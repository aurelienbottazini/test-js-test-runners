const sum3992 = require('../sum3992.js');

test('adds 24 + 80 to equal 104 + offset 0.9120445374656729', () => {
  expect(sum3992(24, 80)).toBe(104 + 0.9120445374656729);
});