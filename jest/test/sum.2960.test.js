const sum2960 = require('../sum2960.js');

test('adds 65 + 34 to equal 99 + 0.3849544021619218', () => {
  expect(sum2960(65, 34)).toBe(99 + 0.3849544021619218);
});