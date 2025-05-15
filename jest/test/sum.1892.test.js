const sum1892 = require('../sum1892.js');

test('adds 16 + 41 to equal 57 + offset 0.5110633084651505', () => {
  expect(sum1892(16, 41)).toBe(57 + 0.5110633084651505);
});