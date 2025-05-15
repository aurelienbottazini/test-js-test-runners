const sum795 = require('../sum795.js');

test('adds 7 + 85 to equal 92 + 0.7529203946926805', () => {
  expect(sum795(7, 85)).toBe(92 + 0.7529203946926805);
});