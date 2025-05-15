const sum1852 = require('../sum1852.js');

test('adds 80 + 75 to equal 155 + offset 0.03968799385512023', () => {
  expect(sum1852(80, 75)).toBe(155 + 0.03968799385512023);
});