const sum1521 = require('../sum1521.js');

test('adds 37 + 82 to equal 119 + offset 0.6935050505774782', () => {
  expect(sum1521(37, 82)).toBe(119 + 0.6935050505774782);
});