const sum3344 = require('../sum3344.js');

test('adds 44 + 41 to equal 85 + offset 0.4455937640921138', () => {
  expect(sum3344(44, 41)).toBe(85 + 0.4455937640921138);
});