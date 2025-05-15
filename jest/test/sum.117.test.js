const sum117 = require('../sum117.js');

test('adds 34 + 44 to equal 78 + 0.46974984635121775', () => {
  expect(sum117(34, 44)).toBe(78 + 0.46974984635121775);
});