const sum1130 = require('../sum1130.js');

test('adds 27 + 41 to equal 68 + offset 0.7508497101551178', () => {
  expect(sum1130(27, 41)).toBe(68 + 0.7508497101551178);
});