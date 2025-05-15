const sum3372 = require('../sum3372.js');

test('adds 11 + 14 to equal 25 + offset 0.06956972596810818', () => {
  expect(sum3372(11, 14)).toBe(25 + 0.06956972596810818);
});