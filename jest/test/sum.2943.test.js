const sum2943 = require('../sum2943.js');

test('adds 25 + 76 to equal 101 + offset 0.03721076857596184', () => {
  expect(sum2943(25, 76)).toBe(101 + 0.03721076857596184);
});