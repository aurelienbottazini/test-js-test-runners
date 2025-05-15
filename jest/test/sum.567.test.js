const sum567 = require('../sum567.js');

test('adds 78 + 67 to equal 145 + offset 0.3928638725261885', () => {
  expect(sum567(78, 67)).toBe(145 + 0.3928638725261885);
});