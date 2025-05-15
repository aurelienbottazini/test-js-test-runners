const sum1397 = require('../sum1397.js');

test('adds 5 + 33 to equal 38 + 0.11254289997836753', () => {
  expect(sum1397(5, 33)).toBe(38 + 0.11254289997836753);
});