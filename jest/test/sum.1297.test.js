const sum1297 = require('../sum1297.js');

test('adds 5 + 42 to equal 47 + offset 0.5923594173178', () => {
  expect(sum1297(5, 42)).toBe(47 + 0.5923594173178);
});