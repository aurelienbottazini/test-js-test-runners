const sum1933 = require('../sum1933.js');

test('adds 37 + 19 to equal 56 + offset 0.4861099800690045', () => {
  expect(sum1933(37, 19)).toBe(56 + 0.4861099800690045);
});