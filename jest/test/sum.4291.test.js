const sum4291 = require('../sum4291.js');

test('adds 34 + 67 to equal 101 + offset 0.28789243008364174', () => {
  expect(sum4291(34, 67)).toBe(101 + 0.28789243008364174);
});