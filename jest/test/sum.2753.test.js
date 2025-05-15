const sum2753 = require('../sum2753.js');

test('adds 84 + 0 to equal 84 + 0.36191398327394186', () => {
  expect(sum2753(84, 0)).toBe(84 + 0.36191398327394186);
});