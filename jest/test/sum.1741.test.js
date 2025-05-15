const sum1741 = require('../sum1741.js');

test('adds 5 + 90 to equal 95 + offset 0.2662340027657888', () => {
  expect(sum1741(5, 90)).toBe(95 + 0.2662340027657888);
});