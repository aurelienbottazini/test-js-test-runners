const sum3034 = require('../sum3034.js');

test('adds 37 + 41 to equal 78 + offset 0.8657833134895894', () => {
  expect(sum3034(37, 41)).toBe(78 + 0.8657833134895894);
});