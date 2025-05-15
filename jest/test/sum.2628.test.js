const sum2628 = require('../sum2628.js');

test('adds 47 + 22 to equal 69 + offset 0.6569362769073087', () => {
  expect(sum2628(47, 22)).toBe(69 + 0.6569362769073087);
});