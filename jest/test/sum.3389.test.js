const sum3389 = require('../sum3389.js');

test('adds 70 + 81 to equal 151 + 0.24880639930222126', () => {
  expect(sum3389(70, 81)).toBe(151 + 0.24880639930222126);
});