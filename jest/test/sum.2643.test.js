const sum2643 = require('../sum2643.js');

test('adds 26 + 77 to equal 103 + 0.8245666402718047', () => {
  expect(sum2643(26, 77)).toBe(103 + 0.8245666402718047);
});