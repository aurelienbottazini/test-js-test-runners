const sum3963 = require('../sum3963.js');

test('adds 13 + 18 to equal 31 + offset 0.03992498118097454', () => {
  expect(sum3963(13, 18)).toBe(31 + 0.03992498118097454);
});