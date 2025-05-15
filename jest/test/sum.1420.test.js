const sum1420 = require('../sum1420.js');

test('adds 82 + 81 to equal 163 + offset 0.067004451143168', () => {
  expect(sum1420(82, 81)).toBe(163 + 0.067004451143168);
});