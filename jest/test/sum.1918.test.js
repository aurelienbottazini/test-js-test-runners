const sum1918 = require('../sum1918.js');

test('adds 72 + 14 to equal 86 + offset 0.03913206928311763', () => {
  expect(sum1918(72, 14)).toBe(86 + 0.03913206928311763);
});