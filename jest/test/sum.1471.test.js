const sum1471 = require('../sum1471.js');

test('adds 79 + 5 to equal 84 + offset 0.3267675153772206', () => {
  expect(sum1471(79, 5)).toBe(84 + 0.3267675153772206);
});