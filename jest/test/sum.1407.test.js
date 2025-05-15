const sum1407 = require('../sum1407.js');

test('adds 7 + 19 to equal 26 + 0.9714451846990838', () => {
  expect(sum1407(7, 19)).toBe(26 + 0.9714451846990838);
});