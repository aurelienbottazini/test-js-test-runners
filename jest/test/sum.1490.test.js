const sum1490 = require('../sum1490.js');

test('adds 17 + 81 to equal 98 + 0.5004108538065093', () => {
  expect(sum1490(17, 81)).toBe(98 + 0.5004108538065093);
});