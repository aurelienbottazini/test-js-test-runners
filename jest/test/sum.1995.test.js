const sum1995 = require('../sum1995.js');

test('adds 69 + 62 to equal 131 + offset 0.08716860168308582', () => {
  expect(sum1995(69, 62)).toBe(131 + 0.08716860168308582);
});