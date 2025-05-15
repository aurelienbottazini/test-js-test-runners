const sum4302 = require('../sum4302.js');

test('adds 91 + 76 to equal 167 + offset 0.6441400692450704', () => {
  expect(sum4302(91, 76)).toBe(167 + 0.6441400692450704);
});