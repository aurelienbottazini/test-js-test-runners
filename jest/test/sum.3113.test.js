const sum3113 = require('../sum3113.js');

test('adds 80 + 85 to equal 165 + offset 0.0011231999428361616', () => {
  expect(sum3113(80, 85)).toBe(165 + 0.0011231999428361616);
});