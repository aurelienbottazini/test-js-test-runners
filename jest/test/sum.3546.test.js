const sum3546 = require('../sum3546.js');

test('adds 27 + 58 to equal 85 + 0.11171302922428139', () => {
  expect(sum3546(27, 58)).toBe(85 + 0.11171302922428139);
});