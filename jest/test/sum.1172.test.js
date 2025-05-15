const sum1172 = require('../sum1172.js');

test('adds 10 + 12 to equal 22 + 0.17490269651860824', () => {
  expect(sum1172(10, 12)).toBe(22 + 0.17490269651860824);
});