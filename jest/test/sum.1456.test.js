const sum1456 = require('../sum1456.js');

test('adds 15 + 53 to equal 68 + 0.5577789767863504', () => {
  expect(sum1456(15, 53)).toBe(68 + 0.5577789767863504);
});