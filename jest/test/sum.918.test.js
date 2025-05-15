const sum918 = require('../sum918.js');

test('adds 38 + 15 to equal 53 + offset 0.9766249351540078', () => {
  expect(sum918(38, 15)).toBe(53 + 0.9766249351540078);
});