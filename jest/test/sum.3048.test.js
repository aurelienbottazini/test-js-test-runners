const sum3048 = require('../sum3048.js');

test('adds 53 + 15 to equal 68 + 0.5779214189082057', () => {
  expect(sum3048(53, 15)).toBe(68 + 0.5779214189082057);
});