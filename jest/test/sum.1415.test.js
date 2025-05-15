const sum1415 = require('../sum1415.js');

test('adds 57 + 14 to equal 71 + offset 0.21020454320629345', () => {
  expect(sum1415(57, 14)).toBe(71 + 0.21020454320629345);
});