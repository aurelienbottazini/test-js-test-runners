const sum3681 = require('../sum3681.js');

test('adds 67 + 67 to equal 134 + offset 0.38925199459340676', () => {
  expect(sum3681(67, 67)).toBe(134 + 0.38925199459340676);
});