const sum2753 = require('../sum2753.js');

test('adds 41 + 53 to equal 94 + offset 0.24802266014027974', () => {
  expect(sum2753(41, 53)).toBe(94 + 0.24802266014027974);
});