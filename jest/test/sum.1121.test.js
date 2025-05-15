const sum1121 = require('../sum1121.js');

test('adds 39 + 2 to equal 41 + 0.2576352507625559', () => {
  expect(sum1121(39, 2)).toBe(41 + 0.2576352507625559);
});