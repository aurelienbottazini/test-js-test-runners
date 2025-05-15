const sum1986 = require('../sum1986.js');

test('adds 97 + 14 to equal 111 + 0.13893699466178255', () => {
  expect(sum1986(97, 14)).toBe(111 + 0.13893699466178255);
});