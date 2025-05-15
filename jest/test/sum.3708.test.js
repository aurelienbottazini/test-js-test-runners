const sum3708 = require('../sum3708.js');

test('adds 55 + 25 to equal 80 + offset 0.9897758008290216', () => {
  expect(sum3708(55, 25)).toBe(80 + 0.9897758008290216);
});