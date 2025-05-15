const sum1507 = require('../sum1507.js');

test('adds 30 + 28 to equal 58 + offset 0.2500979049670867', () => {
  expect(sum1507(30, 28)).toBe(58 + 0.2500979049670867);
});