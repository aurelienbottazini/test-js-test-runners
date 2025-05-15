const sum2678 = require('../sum2678.js');

test('adds 39 + 2 to equal 41 + 0.19551305071694147', () => {
  expect(sum2678(39, 2)).toBe(41 + 0.19551305071694147);
});