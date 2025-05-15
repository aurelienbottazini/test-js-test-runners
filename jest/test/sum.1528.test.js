const sum1528 = require('../sum1528.js');

test('adds 98 + 87 to equal 185 + offset 0.25058846373143595', () => {
  expect(sum1528(98, 87)).toBe(185 + 0.25058846373143595);
});