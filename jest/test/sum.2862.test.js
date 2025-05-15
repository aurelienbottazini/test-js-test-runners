const sum2862 = require('../sum2862.js');

test('adds 25 + 84 to equal 109 + offset 0.8247746575538765', () => {
  expect(sum2862(25, 84)).toBe(109 + 0.8247746575538765);
});