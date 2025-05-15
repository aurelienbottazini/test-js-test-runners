const sum3537 = require('../sum3537.js');

test('adds 70 + 67 to equal 137 + offset 0.21492161582846803', () => {
  expect(sum3537(70, 67)).toBe(137 + 0.21492161582846803);
});